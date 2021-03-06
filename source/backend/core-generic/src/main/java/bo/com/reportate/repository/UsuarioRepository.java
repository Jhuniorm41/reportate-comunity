package bo.com.reportate.repository;

import bo.com.reportate.model.*;
import bo.com.reportate.model.dto.UsuarioDto;
import bo.com.reportate.model.enums.AuthTypeEnum;
import bo.com.reportate.model.enums.EstadoEnum;
import bo.com.reportate.model.enums.TipoUsuarioEnum;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<MuUsuario, Long> {

    Optional<MuUsuario> findByUsernameIgnoreCaseAndAuthType(String username, AuthTypeEnum authTypeEnum);
    Optional<MuUsuario> findByUsernameIgnoreCaseAndTipoUsuarioAndAuthType(String username, TipoUsuarioEnum tipoUsuarioEnum, AuthTypeEnum authTypeEnum);

    Optional<MuUsuario> findByEstadoAndUsername(EstadoEnum estado, String username);
    boolean existsByEstadoAndUsername(EstadoEnum estadoEnum, String username);

    @Modifying
    @Query("  UPDATE MuUsuario r " +
            " SET r.password =:password, " +
            " r.passwordGenerado = FALSE " +
            " WHERE r.estadoUsuario = bo.com.reportate.model.enums.UserStatusEnum.ACTIVO and r.username = :userName ")
    void modifyPassword(@Param("userName") String userName
            ,@Param("password") String password);

    @Query("SELECT new bo.com.reportate.model.dto.UsuarioDto(u) FROM MuUsuario  u " +
            "WHERE u.id =:id " +
            "AND u.estado = bo.com.reportate.model.enums.EstadoEnum.ACTIVO " )
    Optional<UsuarioDto> obtenerUsuarioPorId(@Param("id") Long id);

    List<UsuarioDto> findAllByEstadoAndTipoUsuarioNotOrderByNombreAsc(EstadoEnum estadoEnum, TipoUsuarioEnum tipoUsuarioEnum);
    Page<UsuarioDto> findByEstadoAndTipoUsuarioOrderByNombreAsc(EstadoEnum estadoEnum, TipoUsuarioEnum tipoUsuarioEnum, Pageable pageable);

    @Query("    SELECT new bo.com.reportate.model.dto.UsuarioDto(a)" +
            "   FROM MuUsuario a" +
            "   WHERE a.estado = :estado" +
            "   AND (" +
            "       TRIM(LOWER(a.username)) like TRIM(LOWER(:criterioBusqueda))" +
            "       OR TRIM(LOWER(a.nombre)) like TRIM(LOWER(CONCAT('%',:criterioBusqueda,'%')))" +
            "   )" +
            " ORDER BY a.id DESC"
    )
    List<UsuarioDto> searchAll(@Param("estado") EstadoEnum estadoEnum, @Param("criterioBusqueda") String criterioBusqueda);

    Optional<MuUsuario> findByEstadoAndEmail(EstadoEnum estadoEnum, String email);

    boolean existsByIdNotAndEstadoAndEmailAndTipoUsuarioNot(Long id, EstadoEnum estadoEnum, String email, TipoUsuarioEnum tipoUsuarioEnum);
    boolean existsByEstadoAndEmailAndTipoUsuarioNot(EstadoEnum estadoEnum, String email, TipoUsuarioEnum tipoUsuarioEnum);

    @Query("    SELECT u " +
            "   FROM MuUsuario u " +
            "   WHERE u.id NOT IN (" +
            "   SELECT a.idMuUsuario.id " +
            "   FROM MuAlarmaUsuario a " +
            "   WHERE a.idMuAlarma = :alarmaId) ")
    List<UsuarioDto> findAllUsuariosNoAsignados(@Param("alarmaId") MuAlarma alarmaId);


    @Query("SELECT new bo.com.reportate.model.dto.UsuarioDto(a) FROM MuUsuario a where a.id not in " +
            " (SELECT b.idUsuario.id from MuUsuarioGrupo b " +
            " where b.idGrupo = :groupId and b.idUsuario.estadoUsuario = bo.com.reportate.model.enums.UserStatusEnum.ACTIVO)")
    List<UsuarioDto> listUsersNotAssignedInGroups(@Param("groupId") MuGrupo groupId);

    @Query("SELECT new bo.com.reportate.model.dto.UsuarioDto(a) FROM MuUsuario a where a.id in " +
            " (SELECT b.idUsuario.id from MuUsuarioGrupo b " +
            " where b.idGrupo = :groupId and b.idUsuario.estadoUsuario = bo.com.reportate.model.enums.UserStatusEnum.ACTIVO)")
    List<UsuarioDto> listUsersAssignedInGroups(@Param("groupId") MuGrupo groupId);

    @Query("SELECT u " +
            "FROM MuUsuario u " +
            "WHERE u.estadoUsuario = bo.com.reportate.model.enums.UserStatusEnum.ACTIVO " +
            "AND u.id = :usuarioId")
    Optional<MuUsuario> findActiveById(@Param("usuarioId") Long usuarioId);


    @Query(" SELECT m FROM DepartamentoUsuario du INNER JOIN du.muUsuario m INNER JOIN du.departamento d " +
            "WHERE m.estado = bo.com.reportate.model.enums.EstadoEnum.ACTIVO " +
            "AND m.estadoUsuario = bo.com.reportate.model.enums.UserStatusEnum.ACTIVO " +
            "AND m.tipoUsuario = bo.com.reportate.model.enums.TipoUsuarioEnum.MEDICO " +
            "AND du.estado = bo.com.reportate.model.enums.EstadoEnum.ACTIVO " +
            "AND d.estado = bo.com.reportate.model.enums.EstadoEnum.ACTIVO " +
            "AND d=:departamento")
    List<MuUsuario> obtenerMedicoPordepartamento(@Param("departamento")Departamento departamento);

    @Query(" SELECT m.email FROM MunicipioUsuario du INNER JOIN du.muUsuario m INNER JOIN du.municipio d " +
            "WHERE m.estado = bo.com.reportate.model.enums.EstadoEnum.ACTIVO " +
            "AND m.estadoUsuario = bo.com.reportate.model.enums.UserStatusEnum.ACTIVO " +
            "AND m.tipoUsuario = bo.com.reportate.model.enums.TipoUsuarioEnum.MEDICO " +
            "AND du.estado = bo.com.reportate.model.enums.EstadoEnum.ACTIVO " +
            "AND d.estado = bo.com.reportate.model.enums.EstadoEnum.ACTIVO " +
            "AND d=:municipio AND m.email IS NOT NULL")
    List<String> obtenerMedicoPorMunicipio(@Param("municipio") Municipio municipio);

    @Query(" SELECT m.email FROM CentroSaludUsuario du INNER JOIN du.muUsuario m INNER JOIN du.centroSalud d " +
            "WHERE m.estado = bo.com.reportate.model.enums.EstadoEnum.ACTIVO " +
            "AND m.estadoUsuario = bo.com.reportate.model.enums.UserStatusEnum.ACTIVO " +
            "AND m.tipoUsuario = bo.com.reportate.model.enums.TipoUsuarioEnum.MEDICO " +
            "AND du.estado = bo.com.reportate.model.enums.EstadoEnum.ACTIVO " +
            "AND d.estado = bo.com.reportate.model.enums.EstadoEnum.ACTIVO " +
            "AND d=:centroSalud AND m.email IS NOT NULL")
    List<String> obtenerMedicoPorCentroSalud(@Param("centroSalud") CentroSalud centroSalud);

}

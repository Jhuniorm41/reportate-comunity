package bo.com.reportate.repository;

import bo.com.reportate.model.CentroSalud;
import bo.com.reportate.model.Municipio;
import bo.com.reportate.model.dto.CentroSaludDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * @Created by :MC4
 * @Autor :Ricardo Laredo
 * @Email :rlaredo@mc4.com.bo
 * @Date :2020-03-30
 * @Project :reportate
 * @Package :bo.com.reportate.repository
 * @Copyright :MC4
 */
public interface CentroSaludRepository extends JpaRepository<CentroSalud, Long> {
    List<CentroSaludDto> findByMunicipioIdOrderByIdDesc(Long idMunicipio);
    boolean existsByMunicipioAndNombreIgnoreCase(Municipio municipio, String nombre);

    boolean existsByIdIsNotAndNombreIgnoreCase(Long municipioId, String nombre);

    @Modifying
    @Query("UPDATE CentroSalud d SET d.estado = bo.com.reportate.model.enums.EstadoEnum.ELIMINADO where d.id =:id")
    void eliminar(@Param("id") Long id);
}

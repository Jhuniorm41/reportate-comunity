package bo.com.reportate.model.dto;

import bo.com.reportate.model.Departamento;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

/**
 * @Created by :MC4
 * @Autor :Ricardo Laredo
 * @Email :rlaredo@mc4.com.bo
 * @Date :2020-03-30
 * @Project :reportate
 * @Package :bo.com.reportate.model
 * @Copyright :MC4
 */
@Getter
@Setter @NoArgsConstructor
public class DepartamentoUsuarioDto implements Serializable {
    private Long id;
    private String nombre;
    private Boolean asignado;
    public DepartamentoUsuarioDto(Departamento departamento){
        this.id = departamento.getId();
        this.nombre = departamento.getNombre();
        this.asignado = (departamento.getDepartamentoUsuarios() != null && !departamento.getDepartamentoUsuarios().isEmpty());
    }

    public DepartamentoUsuarioDto(Long id, String nombre, Boolean asignado) {
        this.id = id;
        this.nombre = nombre;
        this.asignado = asignado;
    }
}

package bo.com.reportate.model.dto;

import bo.com.reportate.model.CentroSalud;
import lombok.Getter;
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
@Getter @Setter
public class CentroSaludUsuarioDto implements Serializable {
    private Long id;
    private String nombre;
    private Double latitud;
    private Double longitud;
    private String direccion;
    private String zona;
    private String ciudad;
    private Boolean asignado;

    public CentroSaludUsuarioDto(CentroSalud centroSalud){
        this.id = centroSalud.getId();
        this.nombre = centroSalud.getNombre();
        this.latitud = centroSalud.getLatitud();
        this.longitud = centroSalud.getLongitud();
        this.direccion = centroSalud.getDireccion();
        this.zona = centroSalud.getZona();
        this.ciudad = centroSalud.getCiudad();
        this.asignado =(centroSalud.getCentroSaludUsuarios() != null && !centroSalud.getCentroSaludUsuarios().isEmpty());
    }
}
package bo.com.reportate.model.dto.response;

import bo.com.reportate.model.Enfermedad;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

/**
 * @Created by :MC4
 * @Autor :Ricardo Laredo
 * @Email :rlaredo@mc4.com.bo
 * @Date :2020-04-02
 * @Project :reportate
 * @Package :bo.com.reportate.model.dto.request
 * @Copyright :MC4
 */
@Setter @Getter @NoArgsConstructor @AllArgsConstructor
public class EnfermedadResponse implements Serializable {
    private Long id;
    private String nombre;
    public EnfermedadResponse(Enfermedad enfermedad){
        this.id = enfermedad.getId();
        this.nombre = enfermedad.getNombre();
    }
}

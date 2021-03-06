package bo.com.reportate.model.dto.request;

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
@Setter
@NoArgsConstructor
public class DepartamentoRequest implements Serializable {
    private Long id;
    private String nombre;
    private Boolean asignado;

}

package bo.com.reportate.model.dto.request;

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
@Getter @Setter @NoArgsConstructor
public class PaisRequest implements Serializable {
    private Long id;
    private String nombre;
}

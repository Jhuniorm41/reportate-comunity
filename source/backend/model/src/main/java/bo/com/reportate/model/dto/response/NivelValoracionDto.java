package bo.com.reportate.model.dto.response;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @Data
public class NivelValoracionDto implements Serializable{
	private Date registrado;
	private Long alto;
	private Long medio;
	private Long bajo;
	
	public NivelValoracionDto(Date registrado, Long alto, Long medio, Long bajo) {
		super();
		this.registrado = registrado;
		this.alto = alto;
		this.medio = medio;
		this.bajo = bajo;
	}
	
	
}
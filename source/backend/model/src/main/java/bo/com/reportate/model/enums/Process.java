package bo.com.reportate.model.enums;

import lombok.Getter;

/**
 * Created by :MC4
 * Autor      :Ricardo Laredo
 * Email      :rlaredo@mc4.com.bo
 * Date       :13-01-19
 * Project    :reportate
 * Package    :bo.com.reportate.model.enums
 * Copyright  : MC4
 */
@Getter
public enum Process {
    // Administracion...
    SESION("SESION"),
    ADMINISTRACION("ADMINISTRACION"),
    // Grupo
    GRUPO("PROCESS"),
    REGISTRO_FAMILIA("REGISTRO_FAMILIA"),
    REGISTRO_PACIENTE("REGISTRO_PACIENTE"),
    CONTROL_DIARIO("CONTROL_DIARIO"),
    DIAGNOSTICO("DIAGNOSTICO");

    private String proceso;
    Process(String proceso){
        this.proceso = proceso;
    }
}

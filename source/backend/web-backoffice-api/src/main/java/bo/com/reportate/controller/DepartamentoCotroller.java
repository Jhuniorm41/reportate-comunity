package bo.com.reportate.controller;

import bo.com.reportate.exception.NotDataFoundException;
import bo.com.reportate.exception.OperationException;
import bo.com.reportate.model.Departamento;
import bo.com.reportate.model.Municipio;
import bo.com.reportate.model.dto.DepartamentoDto;
import bo.com.reportate.model.dto.MunicipioDto;
import bo.com.reportate.service.DepartamentoService;
import bo.com.reportate.service.MunicipioService;
import bo.com.reportate.util.CustomErrorType;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

/**
 * @Created by :MC4
 * @Autor :Ricardo Laredo
 * @Email :rlaredo@mc4.com.bo
 * @Date :2020-03-30
 * @Project :reportate
 * @Package :bo.com.reportate.controller
 * @Copyright :MC4
 */
@Slf4j
@RestController
@RequestMapping("/api/departamentos")
public class DepartamentoCotroller {
    @Autowired
    private DepartamentoService departamentoService;
    @Autowired
    private MunicipioService municipioService;

    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<DepartamentoDto>> listAll() {
        try {
            return ok(this.departamentoService.findAllConMunicipio());
        }catch (Exception e){
            log.error("Se genero un error al listar los departamentos",e);
            return CustomErrorType.serverError("Listar Departamentos", "Ocurrió un error al listar los departamentos");
        }
    }

    @RequestMapping(value = "/{departamentoId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Departamento> getById(@PathVariable("departamentoId") Long departamentoId) {
        try {
            return ok(this.departamentoService.findById(departamentoId));
        }catch (NotDataFoundException e){
            log.error("Se genero un error al obtener el departamento con ID: {}. Causa. {}",departamentoId,e.getMessage());
            return CustomErrorType.badRequest("Obtener Departamento", "Ocurrió un error al obtener el departamento con ID: "+departamentoId);
        }catch (Exception e){
            log.error("Se genero un error al obtener el departamento con ID: {}",departamentoId,e);
            return CustomErrorType.serverError("Obtener Departamento", "Ocurrió un error al obtener el departamento con ID: "+departamentoId);
        }
    }

    @RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Departamento> saveDepartamento(@RequestBody DepartamentoDto departamentoDto) {
        try {
            return ok(this.departamentoService.save(departamentoDto.getNombre(), departamentoDto.getLatitud(), departamentoDto.getLongitud()));
        }catch (NotDataFoundException | OperationException e){
            log.error("Se genero un error al guardar el departamento: {}. Causa. {}",departamentoDto.getNombre(),e.getMessage());
            return CustomErrorType.badRequest("Guardar Departamento", "Ocurrió un error al guardar el departamento: "+departamentoDto.getNombre());
        }catch (Exception e){
            log.error("Se genero un error al guardar el departamento : {}",departamentoDto.getNombre(),e);
            return CustomErrorType.serverError("Guardar Departamento", "Ocurrió un error al guardar el departamento: "+departamentoDto.getNombre());
        }
    }

    @RequestMapping(value = "/{departamentoId}",method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateDepartamento(@PathVariable("departamentoID")Long departamentoId, @RequestBody DepartamentoDto departamentoDto) {
        try {
            return ok(this.departamentoService.update(departamentoId, departamentoDto.getNombre(), departamentoDto.getLatitud(), departamentoDto.getLongitud()));
        }catch (NotDataFoundException | OperationException e){
            log.error("Se genero un error al modificar el departamento: {}. Causa. {}",departamentoId,e.getMessage());
            return CustomErrorType.badRequest("Modificar Departamento", "Ocurrió un error al modificar el departamento: "+departamentoId);
        }catch (Exception e){
            log.error("Se genero un error al modificar el departamento : {}",departamentoId,e);
            return CustomErrorType.serverError("Modificar Departamento", "Ocurrió un error al modificar el departamento: "+departamentoId);
        }
    }

    @RequestMapping(value = "/{departamentoId}/municipios",method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<MunicipioDto>> listarMunicipios(@PathVariable("departamentoId")Long departamentoId) {
        try {
            return ok(this.municipioService.findByDepartamento(departamentoId));
        }catch (NotDataFoundException | OperationException e){
            log.error("Se genero un error al listar municipios: {}. Causa. {}",departamentoId,e.getMessage());
            return CustomErrorType.badRequest("Listar Municipios", "Ocurrió un error al listar municipios: "+departamentoId);
        }catch (Exception e){
            log.error("Se genero un error al listar municipios : {}",departamentoId,e);
            return CustomErrorType.serverError("Listar Municipios", "Ocurrió un error al listar municipios: "+departamentoId);
        }
    }

}
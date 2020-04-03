package bo.com.reportate.service.impl;

import bo.com.reportate.exception.NotDataFoundException;
import bo.com.reportate.model.Departamento;
import bo.com.reportate.model.Enfermedad;
import bo.com.reportate.model.dto.response.DiagnosticoResponse;
import bo.com.reportate.model.enums.EstadoDiagnosticoEnum;
import bo.com.reportate.model.enums.EstadoEnum;
import bo.com.reportate.repository.ControlDiarioRepository;
import bo.com.reportate.repository.DepartamentoRepository;
import bo.com.reportate.repository.DiagnosticoRepository;
import bo.com.reportate.repository.EnfermedadRepository;
import bo.com.reportate.service.DiagnosticoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

/**
 * @Created by :MC4
 * @Autor :Ricardo Laredo
 * @Email :rlaredo@mc4.com.bo
 * @Date :2020-04-02
 * @Project :reportate
 * @Package :bo.com.reportate.service.impl
 * @Copyright :MC4
 */
@Service
public class DiagnosticoServiceImpl implements DiagnosticoService {
    @Autowired
    private DiagnosticoRepository diagnosticoRepository;
    @Autowired private ControlDiarioRepository controlDiarioRepository;
    @Autowired private DepartamentoRepository departamentoRepository;
    @Autowired private EnfermedadRepository enfermedadRepository;
    @Override
    @Transactional(readOnly = true)
    public Page<DiagnosticoResponse> listarDiagnostico(Date from, Date to, Long departamentoId, EstadoDiagnosticoEnum estadoDiagnostico, Long enfermedadId, Pageable pageable) {
        Departamento departamento = this.departamentoRepository.findByIdAndEstado(departamentoId, EstadoEnum.ACTIVO).orElseThrow(()->new NotDataFoundException("No se encontró el departamento seleccionado"));
        Enfermedad enfermedad = this.enfermedadRepository.findByIdAndEstado(enfermedadId,EstadoEnum.ACTIVO).orElseThrow(()->new NotDataFoundException("No se encontró la enfermedad seleccionado"));

        return diagnosticoRepository.listarDiagnostico(from, to, departamento,estadoDiagnostico,enfermedad,pageable );
    }
}
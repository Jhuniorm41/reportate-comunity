package bo.com.reportate.repository;

import bo.com.reportate.model.ControlDiarioEnfermedad;
import bo.com.reportate.model.Familia;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @Created by :MC4
 * @Autor :Ricardo Laredo
 * @Email :rlaredo@mc4.com.bo
 * @Date :2020-04-01
 * @Project :reportate
 * @Package :bo.com.reportate.repository
 * @Copyright :MC4
 */
public interface FamiliaRepository extends JpaRepository<Familia, Long> {
}

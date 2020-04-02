package bo.com.reportate.repository;

import bo.com.reportate.model.Enfermedad;
import bo.com.reportate.model.Pais;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @Created by :MC4
 * @Autor :Ricardo Laredo
 * @Email :rlaredo@mc4.com.bo
 * @Date :2020-03-30
 * @Project :reportate
 * @Package :bo.com.reportate.repository
 * @Copyright :MC4
 */
public interface PaisRepository extends JpaRepository<Pais, Long> {

}
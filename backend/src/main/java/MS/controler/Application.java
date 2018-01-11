/*
 * 文件名：Application.java
 * 版权：Copyright 2016 Simon  Tech  All Rights Reserved. 
 * 描述： Application.java
 * 修改人：Simon
 * 修改时间：Dec 19, 2016
 * 修改内容：新增
 */
package MS.controler;

import org.slf4j.impl.StaticLoggerBinder;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 *
 * @author lynn.lqp
 */
@EnableAutoConfiguration
@SpringBootApplication
@ComponentScan(basePackages = {"MS.*"})
public class Application extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        StaticLoggerBinder.class.toGenericString();
        return application.sources(Application.class);
    }

    /**
     *
     * @param args args
     */
    public static void main(String[] args) {

        SpringApplication.run(Application.class, args);
    }

}

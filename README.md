package com.gogofnd.gogorent.global.config;

import com.gogofnd.gogorent.global.user.service.JwtBlacklistService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserDetailsService userDetailsService;
    private final CustomAuthenticationEntryPoint authenticationEntryPoint;
    private final CustomAccessDeniedHandler accessDeniedHandler;
    private final JwtUtil jwtUtil;
    private final JwtBlacklistService jwtBlacklistService;


    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .authorizeRequests().antMatchers(
                        "/auth/**","/appleOAuth/**","/kakaoOAuth/**", "/googleOAuth/**","/apple/**", "/android/**"
                        ,"/swagger-ui/**", "/swagger-resources/**", "/swagger-ui.html"
                , "/v2/**", "/v3/api-docs/**", "/v3/api-docs.yaml","/faq/**","/notice/**","/terms/**"
                ,"/rent/local", "/rent/findagencies", "/rent/all-bikes-activecontract", "/rent/getAppImage", "/ws/**"
                ).permitAll()
                .antMatchers("/cs/**").hasRole("CS")
                .antMatchers("/agency/**").hasAnyRole("MG", "CS")
                .anyRequest().authenticated()
                .and()
                .exceptionHandling()
                    .accessDeniedHandler(accessDeniedHandler)
                    .authenticationEntryPoint(authenticationEntryPoint)
                .and()
                    .addFilterBefore(new JwtRequestFilter(jwtUtil, userDetailsService, jwtBlacklistService), UsernamePasswordAuthenticationFilter.class)
                    .addFilterBefore(new JwtExceptionFilter(), JwtRequestFilter.class)

                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }




    @Bean
    public CorsFilter corsFilter(){
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
//        config.addAllowedOrigin("https://ga.navers.co.kr:3150");
//        config.addAllowedOrigin("https://gb.navers.co.kr:3150");
//        config.addAllowedOrigin("https://ga.navers.co.kr:3160");
//        config.addAllowedOrigin("https://gb.navers.co.kr:3160");
//        config.addAllowedOrigin("https://ga.navers.co.kr:3450");
//        config.addAllowedOrigin("https://gb.navers.co.kr:3450");
//        config.addAllowedOrigin("http://localhost:3000");
//        config.addAllowedOrigin("http://localhost:3001");
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }



}

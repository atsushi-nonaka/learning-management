//package com.example;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.builders.WebSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
///**
// * SpringSecurityに関わるクラス
// * 
// * @author nonaka
// *
// */
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//	
//	/**
//	 * 静的リソースに対してセキュリティの設定を無効にする。
//	 */
//	@Override
//	public void configure(WebSecurity web) throws Exception {
//		web.ignoring().antMatchers("*");
//	}
//	
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http
//			.authorizeRequests()
//	}
//
//}

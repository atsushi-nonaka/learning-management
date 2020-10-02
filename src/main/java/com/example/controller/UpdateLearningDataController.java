package com.example.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.domain.LearningData;
import com.example.service.UpdateLearningDataService;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * 学習データの更新を行うコントローラー..
 * 
 * @author nonaka
 *
 */
@Controller
@RequestMapping("")
public class UpdateLearningDataController {
	
	@Autowired
	private UpdateLearningDataService service;
	
	/**
	 * 学習データの更新を行う.
	 * 
	 * @param data 学習管理データ
	 * @throws IOException 
	 * @throws JsonMappingException 
	 * @throws JsonParseException 
	 */
	@CrossOrigin
	@ResponseBody
	@PutMapping("/update_learning_data")
	public void updateLearningData(@RequestBody String jsonData) throws JsonParseException, JsonMappingException, IOException {
		//JacksonのObjectMapperインスタンスを作成
		ObjectMapper mapper = new ObjectMapper();
		//JSON⇒Javaオブジェクトに変換
		LearningData data = mapper.readValue(jsonData, LearningData.class);
		service.update(data);
	}
}

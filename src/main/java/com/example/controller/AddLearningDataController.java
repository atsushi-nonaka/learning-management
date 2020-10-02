package com.example.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.domain.LearningData;
import com.example.service.AddLearningDataService;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * 学習データを追加するコントローラー.
 * 
 * @author nonaka
 *
 */
@Controller
@RequestMapping("")
public class AddLearningDataController {
	
	@Autowired
	private AddLearningDataService service;
	
	/**
	 * 学習データを挿入する.
	 * 
	 * @param jsonData stringifyされたJSONデータ
	 * @return JSONデータ
	 * @throws JsonParseException
	 * @throws JsonMappingException
	 * @throws IOException
	 */
	@CrossOrigin
	@ResponseBody
	@PostMapping("/insert_learning_data")
	public void insertLearningData(@RequestBody String jsonData) throws JsonParseException, JsonMappingException, IOException {
		//JacksonのObjectMapperインスタンスを作成
		ObjectMapper mapper = new ObjectMapper();
		//JSON⇒Javaオブジェクトに変換
		LearningData data = mapper.readValue(jsonData, LearningData.class);
		service.insert(data);
	}
}

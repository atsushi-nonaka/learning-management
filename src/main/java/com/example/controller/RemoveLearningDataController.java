package com.example.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.domain.LearningData;
import com.example.service.RemoveLearningDataService;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Controller
@RequestMapping("")
public class RemoveLearningDataController {
	
	@Autowired
	private RemoveLearningDataService service;
	
	@ResponseBody
	@CrossOrigin
	@DeleteMapping("/delete_learning_data")
	public void removeLearningData(@RequestBody String jsonData) throws JsonParseException, JsonMappingException, IOException {
		//JacksonのObjectMapperインスタンスを作成
		ObjectMapper mapper = new ObjectMapper();
		//JSON⇒Javaオブジェクトに変換
		LearningData data = mapper.readValue(jsonData, LearningData.class);
		service.remove(data.getId());
	}
}

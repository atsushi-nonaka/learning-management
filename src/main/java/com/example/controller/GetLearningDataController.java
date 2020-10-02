package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.domain.LearningData;
import com.example.service.GetLearningDataListService;

/**
 * 全学習リストを取得するコントローラー.
 * 
 * @author nonaka
 *
 */
@Controller
@RequestMapping("")
public class GetLearningDataController {
	
	@Autowired
	private GetLearningDataListService service;
	
	/**
	 * 学習リストデータを取得して返す.
	 * 
	 * @return
	 */
	@GetMapping("/get_learning_data")
	@CrossOrigin
	@ResponseBody
	public List<LearningData> getLearningDataList() {
		return service.findAll();
	}
}

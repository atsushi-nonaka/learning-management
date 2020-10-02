package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.domain.LearningData;
import com.example.repository.LearningDataRepository;

/**
 * 学習データを登録するためのサービス.
 * 
 * @author nonaka
 *
 */
@Service
@Transactional
public class AddLearningDataService {
	
	@Autowired
	private LearningDataRepository repository;
	
	/**
	 * 学習データを挿入する.
	 * 
	 * @param data 学習データ
	 */
	public void insert(LearningData data) {
		data.setVersion(1);
		repository.insert(data);
	}
}

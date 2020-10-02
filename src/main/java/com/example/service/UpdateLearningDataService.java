package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.domain.LearningData;
import com.example.repository.LearningDataRepository;

/**
 * 学習データの更新に関わるサービス.
 * 
 * @author nonaka
 *
 */
@Service
@Transactional
public class UpdateLearningDataService {
	
	@Autowired
	private LearningDataRepository repository;
	
	/**
	 * 額数データを更新する.
	 * 
	 * @param data 更新用学習データ
	 */
	public void update(LearningData data) {
		Integer version = repository.findById(data.getId()).getVersion();
		data.setVersion(version + 1);
		repository.update(data);
	}
}

package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.domain.LearningData;
import com.example.repository.LearningDataRepository;

/**
 * 学習データを取得するためのサービス.
 * 
 * @author nonaa
 *
 */
@Service
@Transactional
public class GetLearningDataListService {

	@Autowired
	private LearningDataRepository repository;
	
	/**
	 * 学習データを取得して返す.
	 * 
	 * @return 学習データ
	 */
	public List<LearningData> findAll() {
		return repository.findAll();
	}
}

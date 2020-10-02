package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.repository.LearningDataRepository;

/**
 * 学習データを削除するサービス.
 * 
 * @author nonaka	
 *
 */
@Service
@Transactional
public class RemoveLearningDataService {
	
	@Autowired
	private LearningDataRepository repository;
	
	/**
	 * IDから学習データ1件の削除を行う.
	 * 
	 * @param id ID
	 */
	public void remove(String id) {
		repository.removeById(id);
	}
}

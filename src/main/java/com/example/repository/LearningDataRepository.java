package com.example.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import com.example.domain.LearningData;

/**
 * 学習管理レポジトリ.
 * 
 * @author nonaka
 *
 */
@Repository
public class LearningDataRepository {
	
	@Autowired
	private NamedParameterJdbcTemplate template;
	
	/**
	 * 学習データを生成するローマッパー.
	 */
	private static final RowMapper<LearningData> LEARNINGDATA_ROW_MAPPER = (rs, i) -> {
		LearningData data = new LearningData();
		data.setId(rs.getString("id"));
		data.setLanguage(rs.getString("language"));
		data.setNote(rs.getString("note"));
		data.setDate(rs.getDate("date"));
		data.setCreatedAt(rs.getDate("created_at"));
		data.setUpdatedAt(rs.getDate("updated_at"));
		data.setVersion(rs.getInt("version"));
		data.setUserId(rs.getString("user_id"));
		return data;
	};
	
	/** DBテーブル名 */
	private static final String TABLE_NAME = "learning_data";
	
	/**
	 * データの挿入を行う.
	 * 
	 * @param data 学習管理データ
	 */
	public void insert(LearningData data) {
		String sql = "INSERT INTO " + TABLE_NAME + "(id, language, note, date, created_at, updated_at, version, user_id) VALUES(:id, :language, :note, :date, :createdAt, :updatedAt, :version, :userId)";
		SqlParameterSource param = new BeanPropertySqlParameterSource(data);
		template.update(sql, param);
	}
	
	/**
	 * DB内全データの取得.
	 * 
	 * @return 全学習データ
	 */
	public List<LearningData> findAll(String userId) {
		String sql = "SELECT id, language, note, date, created_at, updated_at, version, user_id FROM " + TABLE_NAME + " WHERE user_id = :userId Order by id";
		SqlParameterSource param = new MapSqlParameterSource().addValue("userId", userId);
		return template.query(sql, param, LEARNINGDATA_ROW_MAPPER);
	}
	
	/**
	 * IDが一致したデータのみを取得する.
	 * 
	 * @param id ID
	 * @return 学習データ
	 */
	public LearningData findById(String id) {
		String sql = "SELECT id, language, note, date, created_at, updated_at, version, user_id FROM " + TABLE_NAME + " WHERE id = :id";
		SqlParameterSource param = new MapSqlParameterSource().addValue("id", id);
		return template.queryForObject(sql, param, LEARNINGDATA_ROW_MAPPER);
	}
	
	/**
	 * IDによるDBの削除を行う.
	 * 
	 * @param id ID
	 */
	public void removeById(String id) {
		String sql = "DELETE FROM " + TABLE_NAME + " WHERE id = :id";
		SqlParameterSource param = new MapSqlParameterSource().addValue("id", id);
		template.update(sql, param);
	}
	
	/**
	 * 学習データの更新を行う
	 * 
	 * @param data 更新用学習データ
	 */
	public void update(LearningData data) {
		String sql = "UPDATE " + TABLE_NAME + " SET language = :language, note = :note, date = :date, updated_at = :updatedAt, version = :version WHERE id = :id";
		SqlParameterSource param = new BeanPropertySqlParameterSource(data);
		template.update(sql, param);
	}
}

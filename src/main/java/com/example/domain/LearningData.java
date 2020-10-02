package com.example.domain;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 学習データのドメインです.
 * 
 * @author nonaka
 *
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LearningData {
	/** ID */
	private String id;
	/** プログラミング言語 */
	private String language;
	/** メモ */
	private String note;
	/** 学習日 */
	private Date date;
	/** 作成日 */
	private Date createdAt;
	/** 更新日 */
	private Date updatedAt;
	/** 更新回数 */
	private Integer version;
}

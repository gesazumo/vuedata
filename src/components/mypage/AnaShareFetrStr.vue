<template>
	<tbody>
		<tr>
			<th>
				Feature Store명
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-text-field
					placeholder="Feature Store명을 입력하세요"
					single-line
					clearable
					outlined
					hide-details="auto"
					:rules="fetrStrName_rule"
				></v-text-field>
			</td>
		</tr>
		<tr>
			<th>
				Feature Store 설명
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-textarea
					placeholder="Feature Store 설명을 입력하세요"
					outlined
					hide-details="auto"
					:rules="fetrStrDesc_rule"
				></v-textarea>
			</td>
		</tr>
		<tr>
			<th>
				Feature Store
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-select
					v-model="data.fileName"
					:items="fetrStrs"
					placeholder="Feature Store를 선택하세요"
					single-line
					outlined
					hide-details="auto"
					:rules="fetrStrFile_rule"
				></v-select>
			</td>
		</tr>
		<tr>
			<th>
				분석코드
				<span class="asterisk">필수</span>
			</th>
			<td colspan="3">
				<v-select
					v-model="data.anlsCdFiles"
					:items="anlsCds"
					placeholder="분석코드 파일을 선택하세요"
					single-line
					outlined
					hide-details="auto"
					multiple
					v-on:input="limiter"
					@change="Click"
					:rules="anlsCdfiles_rule"
				>
				</v-select>
				<v-simple-table>
					<template v-slot:default>
						<thead>
							<tr>
								<th>파일명</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in data.anlsCdFiles" :key="item">
								<td class="text-left">{{ item }}</td>
							</tr>
						</tbody>
					</template>
				</v-simple-table>
			</td>
		</tr>
		<tr>
			<th>
				DAG 파일
				<span class="asterisk">필수</span>
				<v-tooltip right content-class="secondary tooltip-right">
					<template v-slot:activator="{ on, attrs }">
						<v-btn
							v-bind="attrs"
							v-on="on"
							icon
							style="background: none !important"
						>
							<i class="fas fa-question-circle"></i>
						</v-btn>
					</template>
					<div>
						<p
							class="title"
							style="
								color: #fff !important;
								font-size: 16px !important;
							"
						>
							Feature Store 현행화를 위해 DAG 파일을 업로드 할 수
							있습니다.
						</p>
						<span>
							전처리 로직, 배치 스케쥴링 정보가 포함된 DAG 파일
							업로드
						</span>
					</div>
				</v-tooltip>
			</th>
			<td colspan="3">
				<v-btn
					color="primary"
					dark
					append-outer="fa fa-search"
					style="margin: 0"
				>
					찾아보기
					<i class="fa fa-search"></i>
					<input type="file" class="fileinput" />
				</v-btn>
				<div class="filesize-info">
					총 <span>N개</span>의 파일(00,000KB)
				</div>
				<div v-if="!file">
					<div :class="['dropZone', dragging ? 'dropZone-over' : '']">
						<div class="dropZone-info">
							<span class="dropZone-title"
								>첨부할 파일을 Drag & Drop 방식으로 추가할 수
								있습니다.</span
							>
							<div class="dropZone-upload-limit-info"></div>
						</div>
						<input type="file" />
					</div>
				</div>
				<div v-else class="dropZone-uploaded">
					<div class="dropZone-uploaded-info">
						<table class="fileupload-list">
							<colgroup>
								<col width="" />
								<col width="20%" />
								<col width="10%" />
							</colgroup>
							<tr>
								<th>파일명</th>
								<th>파일크기</th>
								<th>삭제</th>
							</tr>
							<tr>
								<td>filename.gif</td>
								<td>1,234KB</td>
								<td style="text-align: center">
									<v-btn
										color="primary"
										dark
										x-small
										class="removeFile"
										append-outer="fa fa-times"
										@click="removeFile"
									>
										<i class="fa fa-times"></i>
									</v-btn>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</td>
		</tr>
	</tbody>
</template>

<script>
export default {
	props: ['data', 'fetrStrs', 'anlsCds'],

	data() {
		return {
			dragging: false,
			file: '',
			headers: [
				{
					text: '파일명',
					align: 'center',
					sortable: false,
					value: '',
				},
			],

			fetrStrName_rule: [v => !!v || 'Feature Store 명을 입력해 주세요.'],
			fetrStrDesc_rule: [
				v => !!v || 'Feature Store에 대한 설명을 입력해 주세요.',
			],
			fetrStrFile_rule: [v => !!v || 'Feature Store명을 입력해 주세요.'],
			anlsCdfiles_rule: [
				this.data.anlsCdFiles.length > 0 ||
					'분석코드 파일을 선택해 주세요. 분석코드 파일은 3개까지 등록할 수 있습니다.',
			],
			dagFileName_rule: [
				v =>
					!!v ||
					'DAG 파일은 1개까지 등록할 수 있습니다. 용량은 5MB를 넘을수 없습니다.',
			],
		}
	},

	created() {},

	methods: {
		Click() {
			console.log(this.data.anlsCdFiles)
		},

		limiter(e) {
			if (e.length > 3) {
				e.pop()
			}
		},
	},
}
</script>

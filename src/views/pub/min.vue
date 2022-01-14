<template>
	<v-app>
		<div class="text-center">
			<v-dialog
				v-model="dialog"
				:max-width="options.width"
				:style="{ zIndex: options.zIndex }"
				@keydown.esc="cancel"
			>
				<template v-slot:activator="{ on, attrs }">
					<v-btn color="accent" dark v-bind="attrs" v-on="on">
						업로드 요청하기
					</v-btn>
				</template>
				<v-card style="padding: 0 !important; height: 260px !important">
					<v-toolbar-title
						style="
							background: #f4f3f2;
							border-bottom: 1px solid #d8d8d8;
							padding: 10px 15px;
							font-size: 16px;
							font-weight: 600;
						"
					>
						파일 업로드 요청 확인
						<div style="float: right">
							<i class="fa fa-times"></i>
						</div>
					</v-toolbar-title>
					<v-card-text
						style="padding: 40px !important; font-size: 16px"
					>
						주의사항을 모두 확인했으며,<br />
						업로드 요청을 진행 하시겠습니까?
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn
							v-if="!options.noconfirm"
							color="primary"
							dark
							outlined
							class="body-2 font-weight-bold"
							@click.native="cancel"
							>취소</v-btn
						>
						<v-btn
							color="primary"
							dark
							class="body-2 font-weight-bold"
							@click.native="agree"
							>확인</v-btn
						>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</div>

		<!--<v-btn
			color="primary"
			small
			outlined
			style="float: left; height: 40px !important; margin: 0 5px"
			@click="dialog = true"
		>
			버전 업데이트 하기
		</v-btn>
		<v-dialog v-model="dialog" max-width="280">
			<v-card align="center">
				<v-card-title class="text-subtitle-1">
					매뉴얼 버전을<br />
					업데이트 하시겠습니까?
				</v-card-title>
				<v-card-text></v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn
						color="primary"
						dark
						outlined
						@click="dialog = false"
					>
						취소
					</v-btn>

					<v-btn color="primary" dark @click="dialog = false">
						업데이트하기
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>-->

		<!--파일첨부
		<div style="float: left margin-right:10px">
			<v-btn
				color="primary"
				:loading="isSelecting"
				@click="handleFileImport"
				append-outer="fa fa-search"
				style="margin: 0"
			>
				찾아보기
				<i class="fa fa-search"></i>
				<input type="file" class="fileinput" />
			</v-btn>
			<div class="search-desc">
				<p>
					썸네일 이미지는 1개까지 등록할 수 있습니다. 용량은 5MB를
					넘을 수 없습니다.
				</p>
			</div>
		</div>

		<div v-if="!file">
			<div
				:class="['dropZone', dragging ? 'dropZone-over' : '']"
				@dragenter="dragging = true"
				@dragleave="dragging = false"
			>
				<div class="dropZone-info" @drag="onChange">
					<span class="dropZone-title"
						>첨부할 파일을 Drag & Drop 방식으로 추가할 수
						있습니다.</span
					>
					<div class="dropZone-upload-limit-info"></div>
				</div>
				<input type="file" @change="onChange" />
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
		-->
	</v-app>
</template>

<script>
export default {
	data: () => ({
		dialog: false,
		options: {
			color: 'primary',
			width: 320,
			zIndex: 200,
		},
	}),

	methods: {
		onChange(e) {
			var files = e.target.files || e.dataTransfer.files

			if (!files.length) {
				this.dragging = false
				return
			}

			this.createFile(files[0])
		},
		createFile(file) {
			if (!file.type.match('text.*')) {
				alert('please select txt file')
				this.dragging = false
				return
			}

			if (file.size > 5000000) {
				alert('please check file size no over 5 MB.')
				this.dragging = false
				return
			}

			this.file = file
			console.log(this.file)
			this.dragging = false
		},
		removeFile() {
			this.file = ''
		},
	},
	computed: {
		extension() {
			return this.file ? this.file.name.split('.').pop() : ''
		},
	},
}
</script>

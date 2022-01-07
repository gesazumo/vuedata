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
}
</script>

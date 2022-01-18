<template>
	<v-app>
		<div
			class="sub_top_img"
			style="
				background: url('/img/main_bg.d9dcb9f0.png') center center
					no-repeat;
			"
		>
			<div class="sub_top_info">
				<div class="sub_top_txt">
					<ul>
						<li>대시보드</li>
					</ul>
					<h4>제목 표시 한줄까지 들어갑니다</h4>
					<div>
						<div class="good">
							<v-icon>mdi-heart</v-icon>
							224
						</div>
						<div class="view">
							<v-icon>mdi-eye-outline</v-icon>
							55
						</div>
						<div class="date">
							<v-icon>mdi-calendar-text</v-icon>
							마지막 업데이트 : 2022-00-00
						</div>
					</div>
				</div>
				<div class="sub_top_banr">
					<img src="/img/main_img_mater.0d2f212a.png" />
				</div>
			</div>
		</div>
		<div class="sub_content"></div>
		<div class="other">
			<h5>다른 대시보드 확인하기</h5>
			<v-sheet class="mx-auto" max-width="1440">
				<v-slide-group
					v-model="model"
					active-class="success"
					show-arrows
				>
					<v-slide-item
						v-for="n in 10"
						:key="n"
						v-slot="{ active, toggle }"
					>
						<v-card
							:color="active ? undefined : 'grey lighten-1'"
							class="ma-3"
							height="130"
							width="240"
							@click="toggle"
						>
							<v-row align="center" justify="center">
								<div class="item">
									<p>대시보드명 두줄까지</p>
								</div>
							</v-row>
						</v-card>
					</v-slide-item>
				</v-slide-group>
			</v-sheet>
		</div>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		model: null,
	}),
}
</script>

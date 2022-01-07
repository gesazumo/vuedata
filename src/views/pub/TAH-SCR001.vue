<template>
	<v-app>
		<div class="login__bg">
			<img src="../../images/com_logo.png" class="login__logo" />
			<div class="login__title">마이데이터 포탈<br />로그인</div>
			<div class="login__disc">
				분석가의 업무 혁신 및 협업 강화를 위한 그룹 마이데이터 통합분석
				플랫폼
			</div>

			<div class="login__area General-log">
				<ul class="login__area__select">
					<li>
						<v-tabs>
							<v-tab
								><div class="login__route">
									일반 로그인
								</div></v-tab
							>
							<v-tab
								><div class="login__route">
									SSO 로그인
								</div></v-tab
							>
						</v-tabs>
					</li>
				</ul>

				<ul class="login__area__select">
					<div class="login__textfield">
						<v-text-field
							:rules="[() => !!meg || '사번을 입력해 주세요']"
							:error-messages="errorMessages"
							placeholder="사번"
							clearable
							outlined
						>
							<div class="login__num">사번 입력</div>
						</v-text-field>
					</div>
					<div class="login__textfield">
						<v-text-field
							:rules="[() => !!meg || '비밀번호를 입력해 주세요']"
							:error-messages="errorMessages"
							placeholder="비밀번호"
							clearable
							outlined
						>
						</v-text-field>
					</div>
				</ul>

				<div>
					<div>
						<button
							style="
								width: 400px;
								height: 100px;
								background-color: #ffbc00;
								margin-left: 56px;
								margin-top: 10px;
							"
						>
							<sapn class="btn__login">로그인</sapn>
						</button>
					</div>
					<div class="login__area__desc">
						<p>
							&middot; 사번과 비밀번호를 이용하여 로그인 할 수
							있습니다.
						</p>
						<p>
							&middot; SSO 로그인을 통해 서비스 이용이 가능합니다.
						</p>
					</div>
				</div>
			</div>
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

<script>
export default {
	data() {
		return {
			dialog: false,
			page: 1,
			pageCount: 0,
			itemsPerPage: 10,
			items_01: [],
			rules: {
				category_rules: value => !!value || '사번을 입력하세요.',
				secret_rules: value => !!value || '비밀번호를 입력해 주세요.',
			},
		}
	},
	export default {
	data: () => ({
		drawer: false,
		group: null,
	}),

	watch: {
		group() {
			this.drawer = false
		},
	},
}

}
</script>

<script></script>

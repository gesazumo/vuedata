<template>
	<v-app>
		<div class="login__bg">
			<img src="../../images/com_logo.png" class="login__logo" />
			<div class="login__title">마이데이터 포탈<br />로그인</div>
			<div class="login__disc">
				분석가의 업무 혁신 및 협업 강화를 위한 그룹 마이데이터 통합분석
				플랫폼
			</div>

			<div class="login__area">
				<div class="login__area__select">
					<ul>
						<li>일반로그인</li>
						<li>sso로그인</li>
					</ul>
				</div>

				<div>
					<select>
						<optgroup lable="계열사를 선택하세요">
							<option></option>
							<option></option>
							<option></option>
						</optgroup>
					</select>
				</div>

				<div class="login__button">SSO로그인</div>

				<div>
					<p>사번과 비밀번호를 이용하여 로그인 할 수 있습니다.</p>
					<p>SSO로그인을 통해 서비스 이용이 가능합니다.</p>
				</div>
			</div>
		</div>
	</v-app>
</template>

<script></script>

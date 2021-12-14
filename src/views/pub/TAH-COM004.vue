<template>
	<div class="error-page">
		<div class="inner">
			<img src="../../images/com_icon_nota.svg" />
			<div class="error-text">
				<div class="meg">
					<p>권한이 없습니다.</p>
					<span>
						페이지 접근 권한이 없습니다. <br />
						권한을 확인해 주세요.
					</span>
				</div>
				<div class="meg-btn">
					<button
						class="primary large"
						onclick="location.href='/pub/main'"
					>
						홈으로
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

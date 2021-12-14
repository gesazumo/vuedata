<template>
	<div class="error-page">
		<div class="inner">
			<img src="../../images/com_icon_notc.svg" />
			<div class="error-text">
				<div class="meg">
					<p>접속이 원활하지 않습니다.</p>
					<span>
						서비스 이용에 불편을 드려 죄송합니다. <br />
						잠시 후 다시 접속해 주세요.
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

<script>
export default {
	name: 'NotConnected',
}
</script>

<style></style>

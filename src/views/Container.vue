<template>
	<v-app>
		<v-main>
			<div id="quickmenu">
				<div class="quick">
					<ul>
						<li>
							<a href="">
								<img src="@/images/quick_icon_01.png" />
								<span>AWS콘솔바로가기</span>
							</a>
						</li>
						<li>
							<a href="">
								<img src="@/images/quick_icon_02.png" />
								<span>문의하기</span>
							</a>
						</li>
						<li>
							<a href="http://bipotal.kbfng.com:8080/BiPortal">
								<img src="@/images/quick_icon_03.png" />
								<span>인사이트포털</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="scrollTop"></div>
			</div>
			<Header />
			<router-view />
			<Footer />
			<ConfirmModal />
		</v-main>
	</v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ConfirmModal from '@/components/ConfirmModal.vue'

export default {
	name: 'Container',
	components: { Header, Footer, ConfirmModal }, //, LoadingLottie, CheckLottie
}
</script>

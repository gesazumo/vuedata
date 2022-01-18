<template>
	<div>
		<router-view v-if="!$store.state.globalLoading" />
		<loading-lottie v-if="$store.state.globalLoading" />
	</div>
</template>

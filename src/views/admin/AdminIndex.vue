<template>
	<div class="adm_wrap">
		<admin-lnb />
		<router-view />
	</div>
</template>

<script>
import AdminLnb from '@/components/admin/AdminLnb.vue'
export default {
	components: { AdminLnb },
	name: 'AdminIndex',
}
</script>

<style></style>

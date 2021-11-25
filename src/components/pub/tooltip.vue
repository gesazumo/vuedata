<template>
	<v-tooltip right content-class="secondary tooltip-right">
		<template v-slot:activator="{ on, attrs }">
			<v-btn v-bind="attrs" v-on="on" icon color="secondary">
				<v-icon>mdi-help-circle</v-icon>
			</v-btn>
		</template>
		<div>
			<p
				class="title"
				style="color: #fff !important; font-size: 16px !important"
			>
				Notebook 스펙환경
			</p>
			<span>
				Instance Type : ml.g4dn.xlarge <br />
				(Accelerated computing, Vcpu 4, GPU 1, 16GiB)
			</span>
		</div>
	</v-tooltip>
</template>

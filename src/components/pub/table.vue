<template>
	<div class="viewpage">
		<div>가로형</div>
		<table>
			<caption>
				table caption
			</caption>
			<thead>
				<tr>
					<th>컬럼명</th>
					<th>컬럼명</th>
					<th>컬럼명</th>
					<th>컬럼명</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>데이터</td>
					<td>데이터</td>
					<td>데이터</td>
					<td>데이터</td>
				</tr>
			</tbody>
		</table>

		<div>세로형</div>
		<table>
			<caption>
				table caption
			</caption>
			<thead>
				<tr>
					<th>컬럼명</th>
					<td>데이터</td>
					<td>데이터</td>
					<td>데이터</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>컬럼명</th>
					<td>데이터</td>
					<td>데이터</td>
					<td>데이터</td>
				</tr>
				<tr>
					<th>컬럼명</th>
					<td>데이터</td>
					<td>데이터</td>
					<td>데이터</td>
				</tr>
				<tr>
					<th>컬럼명</th>
					<td>데이터</td>
					<td>데이터</td>
					<td>데이터</td>
				</tr>
			</tbody>
		</table>

		<div>혼합형</div>
		<table>
			<caption>
				table caption
			</caption>
			<thead>
				<tr>
					<th>컬럼명</th>
					<th>컬럼명</th>
					<th>컬럼명</th>
					<th>컬럼명</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>컬럼명</th>
					<td>데이터</td>
					<td>데이터</td>
					<td>데이터</td>
				</tr>
				<tr>
					<th>컬럼명</th>
					<td>데이터</td>
					<td>데이터</td>
					<td>데이터</td>
				</tr>
				<tr>
					<th>컬럼명</th>
					<td>데이터</td>
					<td>데이터</td>
					<td>데이터</td>
				</tr>
			</tbody>
		</table>

		<div>How to use 1</div>
		<table class="liner">
			<caption>
				table caption
			</caption>
			<thead>
				<tr>
					<th>컬럼명</th>
					<th>컬럼명</th>
					<th>컬럼명</th>
					<th>컬럼명</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>데이터</td>
					<td>데이터</td>
					<td>데이터</td>
					<td>데이터</td>
				</tr>
			</tbody>
		</table>

		<div>How to use 2</div>
		<table>
			<caption>
				table caption
			</caption>
			<thead>
				<tr>
					<th rowspan="2">컬럼명1</th>
					<th colspan="2">컬럼명2</th>
					<th rowspan="2">컬럼명3</th>
					<th rowspan="2">컬럼명4</th>
				</tr>
				<tr>
					<th>컬럼명 2-1</th>
					<th>컬럼명 2-2</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td rowspan="2">데이터</td>
					<td>데이터</td>
					<td>데이터</td>
					<td rowspan="2">데이터</td>
					<td>데이터</td>
				</tr>
				<tr>
					<td>데이터</td>
					<td>데이터</td>
					<td>데이터</td>
				</tr>
				<tr>
					<td rowspan="2">데이터</td>
					<td>데이터</td>
					<td>데이터</td>
					<td rowspan="2">데이터</td>
					<td>데이터</td>
				</tr>
				<tr>
					<td>데이터</td>
					<td>데이터</td>
					<td>데이터</td>
				</tr>
				<tr>
					<th rowspan="2">컬럼명5</th>
					<th>데이터</th>
					<th>데이터</th>
					<th rowspan="2">데이터</th>
					<th rowspan="2">데이터</th>
				</tr>
				<tr>
					<th>데이터</th>
					<th>데이터</th>
				</tr>
			</tbody>
		</table>

		<div>How to use 3</div>
		<table>
			<caption>
				table caption
			</caption>
			<thead>
				<tr>
					<th colspan="2">컬럼명1</th>
					<th>컬럼명2</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th colspan="2">컬럼명3</th>
					<td>데이터</td>
				</tr>
				<tr>
					<th rowspan="2">컬럼명4</th>
					<th>컬럼명4-1</th>
					<td>데이터</td>
				</tr>
				<tr>
					<th>컬럼명4-2</th>
					<td>데이터</td>
				</tr>
				<tr>
					<th colspan="2">컬럼명5</th>
					<td>데이터</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

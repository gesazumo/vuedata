<template>
	<div id="sub_wrap">
		<div class="title">
			<ul>
				<li>홈</li>
				<li>Analyze</li>
				<li>분석환경신청</li>
			</ul>
			<h3>분석환경신청</h3>
		</div>
		<div class="subcontents">
			<div class="s_title">
				<div class="page_tit">
					<h4>
						그룹 마이데이터 통합분석 플랫폼 서비스 이용을 위한 동의
					</h4>
					<span>
						이용약관을 잘 읽고 동의해주세요. 필수약관에 동의하셔야
						서비스 신청 및 이용이 가능합니다.
					</span>
				</div>
				<div class="page_step">
					<ul>
						<li class="on">
							<img
								src="../../images/step_check_1.svg"
								class="step_check"
							/>
							약관동의
						</li>
						<li class="dash"></li>
						<li>
							<img
								src="../../images/step_check_2_gray.svg"
								class="step_check"
							/>
							신청정보입력
						</li>
					</ul>
				</div>
			</div>
			<div class="s_body">
				<div class="agree_all">
					<p>
						<v-checkbox></v-checkbox>
						전체동의
					</p>
				</div>
				<div class="agree">
					<div class="agree_chk">
						<v-checkbox> </v-checkbox>
						<p>
							권한 및 라이선스 관리 약관에 동의합니다.
							<span>필수</span>
						</p>
					</div>
					<div class="agree_txt">
						그룹 마이데이터 통합분석 플랫폼을 통해 분석환경 및
						데이터 사용권한을 신청한 직원은 해당 권한으로 작업한
						내용에 대한 포괄적인 책임을 가지며, 부서이동, 직무변경
						등 인사 변동사항 발생 시 기존에 득한 권한 및 라이선스
						일체를 즉시 반납해야 합니다.
					</div>
				</div>
				<div class="agree">
					<div class="agree_chk">
						<v-checkbox></v-checkbox>
						<p>
							개인정보 보호 약관에 동의합니다.
							<span>필수</span>
						</p>
					</div>
					<div class="agree_txt">
						개인정보보호 업무매뉴얼 제 14절 개인정보마스킹 정책에
						따라 개인정보의 조회, 출력 등 업무를 수행하는 과정에서
						마스킹 등 표시제한 조치를 수행해야 합니다.
					</div>
				</div>
				<div class="agree">
					<div class="agree_chk">
						<v-checkbox></v-checkbox>
						<p>
							데이터 관리 약관에 동의합니다.
							<span>필수</span>
						</p>
					</div>
					<div class="agree_txt">
						- 신청 계정으로 생성된 테이블 관리와 데이터에 대한
						책임은 계정 및 권한을 소유한 사용자에게 있으며, 내/외부
						감사에 대한 자료 제공 등 수감 업무 일체는 소속 부서에서
						수행해야 합니다.
						<br />
						- API를 통해 외부 기관으로부터 수집한 개인신용정보는
						개인신용정보법 제38조의3에 의거하여 삭제 요건 발생 시
						즉시 삭제해야 하므로, 개인영역(프로젝트 영역 포함)에
						저장한 개인정보 및 개인 신용정보에 대해서는 관련 법령,
						규정, 지침 등을 정확히 이해하고 철저히 관리해야 합니다.
						<br />
						- 분석 플랫폼 내 개인영역은 임시공간으로,
						<span>
							데이터 생성일 기준 5일 후 자동 삭제되며 특별한
							사유가 있을 경우 5일 전이라도 관리자에 의해 일괄
							삭제 등 관리적 조치가 취해질 수 있음에 동의하며
						</span>
						, 충실히 지침에 따라야 합니다.
						<br />
						- 분석은 분석 플랫폼 내에서만 수행하고 로컬영역(PC 등)에
						데이터를 저장하는 등의 행위는 하지 않아야 합니다.
					</div>
				</div>
				<div class="btn_area">
					<button class="regit large">다음 페이지로</button>
				</div>
			</div>
		</div>
		<div id="quickmenu">
			<div class="quick">
				<ul>
					<li>
						<a href="">
							<img src="../../images/quick_icon_01.png" />
							<span>AWS콘솔바로가기</span>
						</a>
					</li>
					<li>
						<a href="">
							<img src="../../images/quick_icon_02.png" />
							<span>문의하기</span>
						</a>
					</li>
					<li>
						<a href="http://bipotal.kbfng.com:8080/BiPortal">
							<img src="../../images/quick_icon_03.png" />
							<span>인사이트포털</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="scrollTop"></div>
		</div>
	</div>
</template>

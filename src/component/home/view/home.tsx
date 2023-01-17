import { DepthPointTwo, EurFormatter } from "../../../lib/utils";
import { IHomeViewProps } from "../../../types/homeView";
import * as S from "../homeStyles";

export default function HomeView({
  eurInfo,
  eurTokrw,
  exchangeUpDown,
  onChangeInputEur,
}: IHomeViewProps) {
  return (
    <S.Container>
      <S.H1>유로(EUR)/원(KRW) 환율</S.H1>
      <S.Main>
        {eurInfo ? (
          <S.InfoWrapper>
            <S.InfoTopBox exchangeUpDown={exchangeUpDown}>
              {EurFormatter(eurInfo.basePrice)}
              <span>
                {" "}
                {exchangeUpDown ? "▲" : "▼"}
                {eurInfo.changePrice}원 (
                {DepthPointTwo((eurInfo.changePrice / eurInfo.basePrice) * 100)}
                %)
              </span>
              <div>환율기준 (1 유로)</div>
            </S.InfoTopBox>
            <S.InfoBottomBox>
              <div>
                <div>현찰 살때 : {EurFormatter(eurInfo.cashBuyingPrice)}</div>
                <div>현찰 팔때 : {EurFormatter(eurInfo.cashSellingPrice)}</div>
              </div>
              <div>
                <div>송금 보낼때 : {EurFormatter(eurInfo.ttSellingPrice)}</div>
                <div>송금 받을때 : {EurFormatter(eurInfo.ttBuyingPrice)}</div>
              </div>
            </S.InfoBottomBox>
          </S.InfoWrapper>
        ) : (
          <S.InfoWrapper>환율 정보를 불러오는 중입니다.</S.InfoWrapper>
        )}
        <S.calculationWrapper>
          <label>
            <input onChange={onChangeInputEur} /> 유로
          </label>
          <span>▶︎</span>
          <label>
            <input disabled defaultValue={eurTokrw} /> 원
          </label>
        </S.calculationWrapper>
      </S.Main>
    </S.Container>
  );
}

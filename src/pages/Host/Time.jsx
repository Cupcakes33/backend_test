import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import Buttons from "../../components/Buttons";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { scheduledIdAtom, classIdAtom, timeAtom } from "../../atom/hostButtonAtom";
const Time = (hostParams) => {
    const setTime = useSetRecoilState(timeAtom);
    const time = useRecoilValue(timeAtom);
    const queryClient = useQueryClient();
    const { classroomId, scheduleId, timeId } = useParams();
    const navigate = useNavigate();



    const handleTimeButton = (timeId) => {

        setTime(timeId);
        navigate(`/host/${classroomId}/${scheduleId}/${timeId}`)
    };
    return (
        <StyledTimeButtonGroup>
            {time === "전체시간" ? (
                <Buttons.Time
                    colorTypes="primary"
                    onClick={() => { handleTimeButton("전체시간") }}>전체시간</Buttons.Time>
            ) : (
                <Buttons.Time
                    onClick={() => { handleTimeButton("전체시간") }}>전체시간</Buttons.Time>
            )}
            {time === "07시~08시" ? (
                <Buttons.Time
                    colorTypes="primary"
                    onClick={() => { handleTimeButton("07시~08시") }}>07시 ~ 08시</Buttons.Time>
            ) : (
                <Buttons.Time
                    onClick={() => { handleTimeButton("07시~08시") }}>07시 ~ 08시</Buttons.Time>
            )}
            {time === "08시~09시" ? (
                <Buttons.Time
                    colorTypes="primary"
                    onClick={() => { handleTimeButton("08시~09시") }}>08시~09시</Buttons.Time>
            ) : (
                <Buttons.Time
                    onClick={() => { handleTimeButton("08시~09시") }}>08시~09시</Buttons.Time>
            )}
            {time === "09시~10시" ? (
                <Buttons.Time
                    colorTypes="primary"
                    onClick={() => { handleTimeButton("09시~10시") }}>09시~10시</Buttons.Time>
            ) : (
                <Buttons.Time
                    onClick={() => { handleTimeButton("09시~10시") }}>09시~10시</Buttons.Time>
            )}
        </StyledTimeButtonGroup>
    );
};

export default Time;

const StyledTimeButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
`;
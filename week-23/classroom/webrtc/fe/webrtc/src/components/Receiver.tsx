import React, { useEffect } from "react";

export function Receiver() {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        socket.onopen = () => {
            socket.send(JSON.stringify({ type: 'receiver'}))
        }

        socket.onmessage = async (event) => {
            const message = JSON.parse(event.data);
            let pc : RTCPeerConnection | null = null;
            if (message.type === 'createOffer'){
                const pc = new RTCPeerConnection();
                pc.setRemoteDescription(message.sdp);

                pc.onicecandidate = (event) => {
                    if (event.candidate) {
                        socket.send(JSON.stringify({ type: 'iceCandidate', candidate: event.candidate }))
                    }
                }

                pc.ontrack = (event) => {
                     if (videoRef.current){
                        videoRef.current.srcObject = new MediaStream([event.track])
                     }
                }

                const answer = await pc.createAnswer();
                await pc.setLocalDescription(answer);
                socket.send(JSON.stringify({ type: 'createAnswer', sdp: pc.localDescription }));
            } else if(message.type === 'iceCandidate'){
                if(pc !== null){
                    //@ts-ignore
                    pc.addIceCandidate(message.candidate);
                }
            }
        }
    },[]);

    return <div>
        <video ref={videoRef}></video>
    </div>
}
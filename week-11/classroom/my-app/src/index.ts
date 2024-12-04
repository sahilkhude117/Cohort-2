

export default {
	async fetch(request: Request , env:Env, ctx:ExecutionContext): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);

		if(request.method === 'GET'){
			return Response.json({
				msg : "Get Request"
			})
		} else {
			return Response.json({
				message: "you did not send a get request"
			});
		}
	}
}
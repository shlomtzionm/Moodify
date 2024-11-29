export class GptMessageModel {
	content:string
}

export class GptChoiceModel {
	message:GptMessageModel
}

export class GptResponseModel {
	choices:GptChoiceModel[]
}

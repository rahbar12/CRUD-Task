const { bookModel } = require("../../models")

exports.get = async () => {
    const data = await bookModel.find()
    return {
        statusCode: 200,
        status: true,
        message: "All Books",
        data
    }
}


exports.post = async ({body}) => {
    const data = await bookModel.create(body)
    return {
        statusCode: 201,
        status: true,
        message: "Book Saved",
        data
    }
}

exports.getOne = async ({params}) => {
    const data = await bookModel.findOne({_id: params.id})
    if (!data)
    {
        return {
            statusCode: 404,
            status: false,
            message: "Book Not Found",
            data: null
        }
    }
    return {
        statusCode: 200,
        status: true,
        message: "Book Data",
        data
    }
}

exports.updateOne = async ({ params, body }) => {
    const data = await bookModel.findOneAndUpdate({ _id: params.id }, body, {new:true})
    if (!data) {
        return {
            statusCode: 404,
            status: false,
            message: "Book Not Found",
            data: null
        }
    }
    return {
        statusCode: 200,
        status: true,
        message: "Book Updated",
        data
    }
}

exports.deleteOne = async ({ params }) => {
    const data = await bookModel.findOneAndDelete({ _id: params.id })
    if (!data) {
        return {
            statusCode: 404,
            status: false,
            message: "Book Not Found",
            data: null
        }
    }
    return {
        statusCode: 200,
        status: true,
        message: "Book Deleted",
        data
    }
}
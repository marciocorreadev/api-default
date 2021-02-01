import AnyValueSchema from '@db/schemas/anyValue'

async function create(data: any) {
    const anyValue = new AnyValueSchema(data);
    return await anyValue.save();
}

async function get(find: object = {}, limit: any, skip: any) {
    limit = parseInt(limit) || 10;
    skip = parseInt(skip) || 0;
    return await AnyValueSchema.find(find, 'anyValue ncm descricao').skip(skip).limit(limit);
}

async function getByNcm(find: object = {}) {
    return await AnyValueSchema.find(find,'anyValue ncm descricao');
}

async function getById(anyValue:string) {
    return await AnyValueSchema.find({anyValue}, 'anyValue ncm descricao')
}

async function update(anyValue: string, data: any) {
    return await AnyValueSchema.findOneAndUpdate({ anyValue }, {
        $set: data,
    });
}

async function remove(anyValue: string) {
    return await AnyValueSchema.findOneAndRemove({anyValue});
}

export default { create, get, getById, update, remove, getByNcm }
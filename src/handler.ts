export const getHello = async (_event: any, _context: any) => {
    return {
        world: {
            fancyData: 'rolling hills from hello'        
        },
        data: 'blah'
    };
};
export const getWorld = async (event: any, context: any) => {
    return JSON.stringify(event) + "|||" + JSON.stringify(context);
};
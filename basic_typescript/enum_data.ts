type Object1 = {
    name: string;
    weight: number;
    explosive: boolean;
    mark: any;
}

enum MarkingGoods { SOLD, BOOKED, ONSALE};

const data: Object1 = {
    name: 'car',
    weight: 100,
    explosive: true,
    mark: MarkingGoods.SOLD,
}

if (data.mark === MarkingGoods.SOLD) {
    console.log(data);
}
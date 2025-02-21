import { title } from "process";

export const calendarEvents = [
  {
    id:1,
    title: "Tập ngực",
    start: new Date(2025, 0, 19, 5, 0, 0), // Ngày 19 tháng 1, 2025, từ 5:00 AM
    end: new Date(2025, 0, 19, 6, 0, 0),   // Đến 6:00 AM
    trainer: "Tâm",
  },
  {
    id:2,
    title: "Tập mông",
    start: new Date(2025, 0, 19, 7, 0, 0), // Ngày 19 tháng 1, 2025, từ 5:00 AM
    end: new Date(2025, 0, 19, 8, 0, 0),   // Đến 6:00 AM
    trainer: "Tâm",
  },
  {
    id:3,
    title: "Tập mông",
    start: new Date(2025, 0, 20, 7, 0, 0), // Ngày 20 tháng 1, 2025, từ 7:00 AM
    end: new Date(2025, 0, 20, 8, 0, 0),   // Đến 8:00 AM
    trainer: "Lan",
  },
  {
    id:4,
    title: "Tập mông",
    start: new Date(2025, 0, 20, 17, 0, 0), // Ngày 20 tháng 1, 2025, từ 7:00 AM
    end: new Date(2025, 0, 20, 18, 0, 0),   // Đến 8:00 AM
    trainer: "Lan",
  },
  {
    id:5,
    title: "Tập lưng",
    start: new Date(2025, 0, 21, 5, 0, 0), // Ngày 21 tháng 1, 2025, từ 5:00 AM
    end: new Date(2025, 0, 21, 6, 0, 0),   // Đến 6:00 AM
    trainer: "Mai",
  },
  {
    id:6,
    title: "Tập vai",
    start: new Date(2025, 0, 22, 6, 0, 0), // Ngày 22 tháng 1, 2025, từ 6:00 AM
    end: new Date(2025, 0, 22, 7, 0, 0),   // Đến 7:00 AM
    trainer: "Tâm",
  },
  {
    id:7,
    title: "Tập ngực",
    start: new Date(2025, 0, 23, 5, 0, 0), // Ngày 23 tháng 1, 2025, từ 5:00 AM
    end: new Date(2025, 0, 23, 6, 0, 0),   // Đến 6:00 AM
    trainer: "Lan",
  },
  {
    id:8,
    title: "Tập mông",
    start: new Date(2025, 0, 24, 7, 0, 0), // Ngày 24 tháng 1, 2025, từ 7:00 AM
    end: new Date(2025, 0, 24, 8, 0, 0),   // Đến 8:00 AM
    trainer: "Mai",
  },
  {
    id:9,
    title: "Tập lưng",
    start: new Date(2025, 0, 25, 5, 0, 0), // Ngày 25 tháng 1, 2025, từ 5:00 AM
    end: new Date(2025, 0, 25, 6, 0, 0),   // Đến 6:00 AM
    trainer: "Tâm",
  },
  {
    id:10,
    title: "Tập lưng",
    start: new Date(2025, 0, 26, 5, 0, 0),
    end: new Date(2025, 0, 26, 6, 0, 0),  
    trainer: "Tâm",
  },
];
export const eventDetail = [
  // idcalendar 1 - Ngực
  {
    id: 1,
    idcalendar: 1,
    title: "Dumbbell Bench Press",
    notes: "4 sets x 12 reps, tạ 5kg, tập trung phát triển cơ ngực giữa.",
  },
  {
    id: 2,
    idcalendar: 1,
    title: "Incline Dumbbell Press",
    notes: "4 sets x 12 reps, tạ 5kg, tập trung vào cơ ngực trên.",
  },
  {
    id: 3,
    idcalendar: 1,
    title: "Chest Fly Machine",
    notes: "4 sets x 12 reps, nhẹ nhàng nhưng hiệu quả cho cơ ngực ngoài.",
  },
  {
    id: 4,
    idcalendar: 1,
    title: "Push-ups",
    notes: "4 sets x 15 reps, bài tập bodyweight để tăng cường cơ ngực và vai.",
  },

  // idcalendar 2 - Mông
  {
    id: 5,
    idcalendar: 2,
    title: "Barbell Hip Thrust",
    notes: "4 sets x 10-12 reps, tạ 20kg + thanh đòn, tập trung vào cơ mông và hông.",
  },
  {
    id: 6,
    idcalendar: 2,
    title: "Bulgarian Split Squat",
    notes: "4 sets x 10-12 reps mỗi chân, tập trung mông và đùi sau.",
  },
  {
    id: 7,
    idcalendar: 2,
    title: "Glute Bridge",
    notes: "4 sets x 12-15 reps, tập trung mông dưới.",
  },
  {
    id: 8,
    idcalendar: 2,
    title: "Cable Kickbacks",
    notes: "4 sets x 15 reps mỗi chân, hỗ trợ nâng mông săn chắc.",
  },

  // idcalendar 3 - Đùi
  {
    id: 9,
    idcalendar: 3,
    title: "Leg Press",
    notes: "4 sets x 12 reps, hỗ trợ phát triển cơ đùi trước và sau.",
  },
  {
    id: 10,
    idcalendar: 3,
    title: "Romanian Deadlift",
    notes: "4 sets x 10-12 reps, tập trung cơ đùi sau và hông.",
  },
  {
    id: 11,
    idcalendar: 3,
    title: "Walking Lunges",
    notes: "4 sets x 12 reps mỗi chân, phát triển đùi và mông.",
  },
  {
    id: 12,
    idcalendar: 3,
    title: "Sumo Squat",
    notes: "4 sets x 12 reps, tập trung vào đùi trong và mông.",
  },

  // idcalendar 4 - Bụng
  {
    id: 13,
    idcalendar: 4,
    title: "Plank",
    notes: "Hold 4 sets x 30-60 giây, tăng sức bền cơ bụng và core.",
  },
  {
    id: 14,
    idcalendar: 4,
    title: "Russian Twists",
    notes: "4 sets x 20 reps mỗi bên, tập trung vào cơ bụng xiên.",
  },
  {
    id: 15,
    idcalendar: 4,
    title: "Hanging Leg Raises",
    notes: "4 sets x 12 reps, phát triển cơ bụng dưới.",
  },
  {
    id: 16,
    idcalendar: 4,
    title: "Bicycle Crunches",
    notes: "4 sets x 20 reps mỗi bên, tăng cường cơ bụng toàn diện.",
  },

  // idcalendar 5 - Lưng
  {
    id: 17,
    idcalendar: 5,
    title: "Lat Pulldown",
    notes: "4 sets x 12 reps, tập trung phát triển cơ lưng rộng.",
  },
  {
    id: 18,
    idcalendar: 5,
    title: "Seated Row",
    notes: "4 sets x 12 reps, tập trung cơ lưng giữa.",
  },
  {
    id: 19,
    idcalendar: 5,
    title: "Pull-ups",
    notes: "4 sets x 8-10 reps, bài tập bodyweight cho lưng và tay.",
  },
  {
    id: 20,
    idcalendar: 5,
    title: "Face Pulls",
    notes: "4 sets x 15 reps, tập trung cơ lưng trên và vai sau.",
  },

  // idcalendar 6 - Vai
  {
    id: 21,
    idcalendar: 6,
    title: "Shoulder Press",
    notes: "4 sets x 12 reps, tập trung phát triển cơ vai trước.",
  },
  {
    id: 22,
    idcalendar: 6,
    title: "Lateral Raise",
    notes: "4 sets x 15 reps, tập trung cơ vai giữa.",
  },
  {
    id: 23,
    idcalendar: 6,
    title: "Front Raise",
    notes: "4 sets x 15 reps, tập trung cơ vai trước.",
  },
  {
    id: 24,
    idcalendar: 6,
    title: "Arnold Press",
    notes: "4 sets x 12 reps, hỗ trợ toàn bộ cơ vai.",
  },

  // idcalendar 7 - Tay trước
  {
    id: 25,
    idcalendar: 7,
    title: "Bicep Curl",
    notes: "4 sets x 12 reps, tập trung phát triển cơ tay trước.",
  },
  {
    id: 26,
    idcalendar: 7,
    title: "Hammer Curl",
    notes: "4 sets x 12 reps, hỗ trợ phát triển cánh tay trước.",
  },
  {
    id: 27,
    idcalendar: 7,
    title: "Concentration Curl",
    notes: "4 sets x 12 reps, tập trung cơ tay trước tối ưu.",
  },
  {
    id: 28,
    idcalendar: 7,
    title: "Cable Curl",
    notes: "4 sets x 15 reps, sử dụng máy cáp để tăng sức bền.",
  },

  // idcalendar 8 - Tay sau
  {
    id: 29,
    idcalendar: 8,
    title: "Tricep Dips",
    notes: "4 sets x 12 reps, tập trung cơ tay sau.",
  },
  {
    id: 30,
    idcalendar: 8,
    title: "Overhead Tricep Extension",
    notes: "4 sets x 12 reps, tập trung phát triển tay sau hiệu quả.",
  },
  {
    id: 31,
    idcalendar: 8,
    title: "Tricep Pushdown",
    notes: "4 sets x 12-15 reps, sử dụng máy cáp.",
  },
  {
    id: 32,
    idcalendar: 8,
    title: "Close-grip Bench Press",
    notes: "4 sets x 12 reps, bài tập đa năng cho tay sau.",
  },

  // idcalendar 9 - Cardio
  {
    id: 33,
    idcalendar: 9,
    title: "Running on Treadmill",
    notes: "4 sets x 10 phút, tăng sức bền và đốt mỡ.",
  },
  {
    id: 34,
    idcalendar: 9,
    title: "Cycling",
    notes: "4 sets x 10 phút, tập trung vào tim mạch và chân.",
  },
  {
    id: 35,
    idcalendar: 9,
    title: "Rowing Machine",
    notes: "4 sets x 8 phút, kết hợp cardio và lưng.",
  },
  {
    id: 36,
    idcalendar: 9,
    title: "Jump Rope",
    notes: "4 sets x 2 phút, cardio nhanh và hiệu quả.",
  },
  // idcalendar 10 - Cardio
  {
    id: 37,
    idcalendar: 10,
    title: "Running on Treadmill",
    notes: "4 sets x 10 phút, tăng sức bền và đốt mỡ.",
  },
  {
    id: 38,
    idcalendar: 10,
    title: "Cycling",
    notes: "4 sets x 10 phút, tập trung vào tim mạch và chân.",
  },
  {
    id: 39,
    idcalendar: 10,
    title: "Rowing Machine",
    notes: "4 sets x 8 phút, kết hợp cardio và lưng.",
  },
  {
    id: 40,
    idcalendar: 10,
    title: "Jump Rope",
    notes: "4 sets x 2 phút, cardio nhanh và hiệu quả.",
  },
];
export const memberShips=[
  {
    id:1,
    title:"PT kèm 1-1",
    tiers:["FIRE-PLUS","FIRE-VIP"]
  },
  {
    id:2,
    title:"Tự do tập luyện tại tất cả câu lạc bộ trong hệ thống",
    tiers:["FIRE","FIRE-PLUS","FIRE-VIP"]
  },
  {
    id:3,
    title:"Không giới hạn thời gian luyện tập",
    tiers:["FIRE","FIRE-PLUS","FIRE-VIP"]
  },
  {
    id:4,
    title:"Tham gia tất cả các lớp: Yoga, Zumba, HIIT, Pilates....",
    tiers:["FIRE-PLUS","FIRE-VIP"]
  },
  {
    id:5,
    title:"Nước uống miễn phí",
    tiers:["FIRE","FIRE-PLUS","FIRE-VIP"]
  },
  {
    id:6,
    title:"Khăn tập thể thao cao cấp.",
    tiers:["FIRE-PLUS","FIRE-VIP"]
  },
  {
    id:7,
    title:"Chuyển nhượng gói",
    tiers:["FIRE-VIP"]
  },
  {
    id:8,
    title:"Khu vực tập VIP",
    tiers:["FIRE-VIP"]
  },
]
export const registerClasses=[
  {
    FIRE:{
      id:1,
      costday:45000,
    },
    FIREPLUS:{
      id:1,
      costday:150000,
    },
    FIREVIP:{
      id:1,
      costday:500000,
    }
  }
]

// id: ID duy nhất cho từng sản phẩm.
// label: Tên sản phẩm.
// category: Danh mục sản phẩm (Supplement, Accessories, Equipment, v.v.).
// price: Giá sản phẩm (đơn vị VND).
// description: Mô tả ngắn gọn về sản phẩm.
// href: Đường dẫn URL đến trang chi tiết sản phẩm.
// inStock: Trạng thái còn hàng (true: còn hàng, false: hết hàng).
// imageUrl: Đường dẫn đến hình ảnh của sản phẩm.

export const productsdata = [
  {
    id: 1,
    label: "WHEY Protein",
    category: "Supplement",
    price: 599000,
    description: "Bột WHEY Protein chất lượng cao, hỗ trợ tăng cơ và phục hồi nhanh chóng sau khi tập.",
    href: "/",
    inStock: true,
    imageUrl: "/images/products/whey-protein.jpg",
  },
  {
    id: 2,
    label: "Yoga Mat",
    category: "Accessories",
    price: 199000,
    description: "Thảm tập yoga chống trượt, độ bền cao, thích hợp cho mọi bài tập yoga và pilates.",
    href: "/",
    inStock: true,
    imageUrl: "/images/products/yoga-mat.jpg",
  },
  {
    id: 3,
    label: "Resistance Bands",
    category: "Accessories",
    price: 150000, 
    description: "Bộ dây kháng lực chất lượng cao, giúp cải thiện cơ bắp và độ linh hoạt.",
    href: "/",
    inStock: true,
    imageUrl: "/images/products/resistance-bands.jpg",
  },
  {
    id: 4,
    label: "Pre-Workout Supplement",
    category: "Supplement",
    price: 450000, 
    description: "Thực phẩm bổ sung năng lượng trước khi tập, giúp bạn đạt hiệu suất tối đa.",
    href: "/",
    inStock: false,
    imageUrl: "/images/products/pre-workout.jpg",
  },
  {
    id: 5,
    label: "Dumbbells Set",
    category: "Equipment",
    price: 1200000, 
    description: "Bộ tạ tay 10kg (2 x 5kg), phù hợp cho các bài tập tại nhà và phòng gym.",
    href: "/",
    inStock: true,
    imageUrl: "/images/products/dumbbells-set.jpg",
  },
  {
    id: 6,
    label: "Foam Roller",
    category: "Accessories",
    price: 250000, 
    description: "Con lăn massage cơ bắp, hỗ trợ giảm căng cơ và phục hồi sau khi tập luyện.",
    href: "/",
    inStock: true,
    imageUrl: "/images/products/foam-roller.jpg",
  },
  {
    id: 7,
    label: "Gym Gloves",
    category: "Accessories",
    price: 100000, 
    description: "Găng tay tập gym chống trơn trượt, bảo vệ tay khi nâng tạ.",
    href: "/",
    inStock: true,
    imageUrl: "/images/products/gym-gloves.jpg",
  },
  {
    id: 8,
    label: "BCAA Powder",
    category: "Supplement",
    price: 550000, 
    description: "BCAA hỗ trợ giảm đau cơ và phục hồi cơ bắp nhanh chóng.",
    href: "/",
    inStock: false,
    imageUrl: "/images/products/bcaa-powder.jpg",
  },
  {
    id: 9,
    label: "Treadmill",
    category: "Equipment",
    price: 10000000, 
    description: "Máy chạy bộ cao cấp, nhiều chế độ tập luyện cho gia đình và phòng gym.",
    href: "/",
    inStock: true,
    imageUrl: "/images/products/treadmill.jpg",
  },
  {
    id: 10,
    label: "Protein Shaker Bottle",
    category: "Accessories",
    price: 99000, 
    description: "Bình lắc pha protein tiện dụng, dung tích 700ml.",
    href: "/",
    inStock: true,
    imageUrl: "/images/products/shaker-bottle.jpg",
  },
];


export const cartItems = [
  {
    id: 1,
    name: "Sữa Dalatmilk 1L",
    category: ["Có đường", "Không đường"],
    price: 35000,
    imageUrl: "/images/cart/dalatmilk-1l.jpg",
  },
  {
    id: 2,
    name: "Bánh khoai lang tím",
    category: ["Nhân đậu xanh", "Nhân phô mai"],
    price: 25000,
    imageUrl: "/images/cart/khoai-lang-tim.jpg",
  },
  {
    id: 3,
    name: "Snack trái cây sấy Sprout",
    category: ["Táo", "Chuối", "Dâu"],
    price: 45000,
    imageUrl: "/images/cart/sprout-snack.jpg",
  },
  {
    id: 4,
    name: "Hạt đậu khô Green One",
    category: ["Đậu nành", "Đậu đỏ", "Đậu xanh"],
    price: 60000,
    imageUrl: "/images/cart/green-one-beans.jpg",
  },
  {
    id: 5,
    name: "Sữa hạt dinh dưỡng",
    category: ["Hạnh nhân", "Óc chó", "Hạt điều"],
    price: 55000,
    imageUrl: "/images/cart/nut-milk.jpg",
  },
  {
    id: 6,
    name: "Bột Whey Protein",
    category: ["Vani", "Chocolate", "Dâu"],
    price: 599000,
    imageUrl: "/images/cart/whey-protein.jpg",
  },
  {
    id: 7,
    name: "Thảm tập Yoga",
    category: ["Xanh dương", "Hồng", "Tím"],
    price: 199000,
    imageUrl: "/images/cart/yoga-mat.jpg",
  },
  {
    id: 8,
    name: "Dây kháng lực",
    category: ["Nhẹ", "Trung bình", "Nặng"],
    price: 150000,
    imageUrl: "/images/cart/resistance-bands.jpg",
  },
  {
    id: 9,
    name: "Bộ tạ tay 10kg",
    category: ["2 x 5kg", "2 x 10kg"],
    price: 1200000,
    imageUrl: "/images/cart/dumbbells.jpg",
  },
  {
    id: 10,
    name: "Áo tập gym nam",
    category: ["S", "M", "L", "XL"],
    price: 299000,
    imageUrl: "/images/cart/gym-shirt.jpg",
  },
];

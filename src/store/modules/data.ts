// 主页数据源
export type dataCenterState = {
    prdLineModule: any[],
    area: any[],
    platform: any[],
    pageXRadio: number,
    pageYRadio: number
}

// 图片资源
const modulePicture: Object = import.meta.glob('@/assets/img/module/*.png', { eager: true })
const moduleActivePicture: Object = import.meta.glob('@/assets/img/module_active/*.png', { eager: true })
const trackPicture: Object = import.meta.glob('@/assets/img/gd/*.png', { eager: true })
const platformJpg: Object = import.meta.glob('@/assets/img/platform/*.jpg', { eager: true })

// 计算缩放比较，因为平台的设计就是1920的，他被缩放放入整体设计稿(含背景)的1920内了
const realityWidth = 1570 //.platform__main的clientWidth
const radio = Math.floor(realityWidth / 1920 * 100000) / 100000

const state: dataCenterState = {
    // 页面比例
    pageXRadio: 1,
    pageYRadio: 1,
    // 产线模块
    prdLineModule: [
        {
            // 名称
            name: '料场2',
            // 标识(设置选中状态时用到)
            mark: 'lc2',
            // 图片数据
            imgBase: modulePicture['/src/assets/img/module/lc2.png']['default'],
            // 图片宽度(三倍图宽度/3*radio)
            imgWdith: Math.round(269*radio) + 'px',
            // 相对于底座的位置
            x: '275px',
            y: '3px',
            // 选中状态[非必需]
            select: {
                imgBase: moduleActivePicture['/src/assets/img/module_active/lc2.png']['default'],
                // (三倍图宽度/3*radio)
                imgWdith: Math.round(312*radio) + 'px',
                // transform: 示例：translate(-45%, -46%), [可以自定义transform偏移值translate]
                // 是否显示选中状态，默认不显示
                show: false
            },
            // 引导箭[非必需]
            guide: [
                { x: '184px', y: '62px', transform: 'rotateX(60deg) rotate(3deg)' }
            ],
            // 轨道[非必需]
            track: [
                { 
                    imgBase: trackPicture['/src/assets/img/gd/lc2gd.png']['default'],
                    imgWdith: Math.round(52*radio) + 'px',
                    x: '132px', 
                    y: '74px'
                }
            ]
        },
        {
            name: '烧结',
            mark: 'sj',
            imgBase: modulePicture['/src/assets/img/module/sj.png']['default'],
            imgWdith: Math.round(219*radio) + 'px',
            x: '484px',
            y: '0px',
            select: {
                imgBase: moduleActivePicture['/src/assets/img/module_active/sj.png']['default'],
                imgWdith: Math.round(257*radio) + 'px',
                show: false
            }
        },
        {
            name: '营销中心',
            mark: 'yxzx',
            imgBase: modulePicture['/src/assets/img/module/yxzx.png']['default'],
            imgWdith: Math.round(197*radio) + 'px',
            x: '671px',
            y: '-8px',
            select: {
                imgBase: moduleActivePicture['/src/assets/img/module_active/yxzx.png']['default'],
                imgWdith: Math.round(226*radio) + 'px',
                show: false
            }
        },
        {
            name: '实验室',
            mark: 'sys',
            imgBase: modulePicture['/src/assets/img/module/sys.png']['default'],
            imgWdith: Math.round(208*radio) + 'px',
            x: '849px',
            y: '-12px',
            select: {
                imgBase: moduleActivePicture['/src/assets/img/module_active/sys.png']['default'],
                imgWdith: Math.round(235*radio) + 'px',
                show: false
            }
        },
        {
            name: '冷轧',
            mark: 'lz',
            imgBase: modulePicture['/src/assets/img/module/lz.png']['default'],
            imgWdith: Math.round(337*radio) + 'px',
            x: '1016px',
            y: '-17px',
            select: {
                imgBase: moduleActivePicture['/src/assets/img/module_active/lz.png']['default'],
                imgWdith: Math.round(366*radio) + 'px',
                show: false
            }
        },
        {
            name: '采购中心',
            mark: 'cgzx',
            imgBase: modulePicture['/src/assets/img/module/cgzx.png']['default'],
            imgWdith: Math.round(301*radio) + 'px',
            x: '200px',
            y: '71px',
            select: {
                imgBase: moduleActivePicture['/src/assets/img/module_active/cgzx.png']['default'],
                imgWdith: Math.round(337*radio) + 'px',
                show: false
            },
            guide: [
                { x: '209px', y: '44px', transform: 'rotateX(60deg) rotate(-74deg)' },
                { x: '207px', y: '95px', transform: 'rotateX(60deg) rotate(108deg)' }
            ],
            track: [
                { 
                    imgBase: trackPicture['/src/assets/img/gd/lc2gd.png']['default'],
                    imgWdith: Math.round(52*radio) + 'px',
                    x: '165px', 
                    y: '88px'
                }
            ]
        },
        {
            name: '球团',
            mark: 'qt',
            imgBase: modulePicture['/src/assets/img/module/qt.png']['default'],
            imgWdith: Math.round(247*radio) + 'px',
            select: {
                imgBase: moduleActivePicture['/src/assets/img/module_active/qt.png']['default'],
                imgWdith: Math.round(287*radio) + 'px',
                show: false
            },
            x: '442px',
            y: '78px'
        },
        {
            name: '指挥中心',
            mark: 'zhzx',
            imgBase: modulePicture['/src/assets/img/module/zhzx.png']['default'],
            imgWdith: Math.round(228*radio) + 'px',
            x: '653px',
            y: '68px',
            select: {
                imgBase: moduleActivePicture['/src/assets/img/module_active/zhzx.png']['default'],
                imgWdith: Math.round(251*radio) + 'px',
                show: false
            }
        },
        {
            name: '能源',
            mark: 'ny',
            imgBase: modulePicture['/src/assets/img/module/ny.png']['default'],
            imgWdith: Math.round(235*radio) + 'px',
            x: '864px',
            y: '30px',
            select: {
                imgBase: moduleActivePicture['/src/assets/img/module_active/ny.png']['default'],
                imgWdith: Math.round(271*radio) + 'px',
                show: false
            }
        },
        {
            name: '热轧',
            mark: 'rz',
            imgBase: modulePicture['/src/assets/img/module/rz.png']['default'],
            imgWdith: Math.round(377*radio) + 'px',
            x: '1057px',
            y: '97px',
            select: {
                imgBase: moduleActivePicture['/src/assets/img/module_active/rz.png']['default'],
                imgWdith: Math.round(412*radio) + 'px',
                show: false
            },
            guide: [
                { x: '208px', y: '6px', transform: 'rotateX(68deg) rotate(-106deg)' }
            ]
        },
        {
            name: '料场',
            mark: 'lc',
            imgBase: modulePicture['/src/assets/img/module/lc.png']['default'],
            imgWdith: Math.round(394*radio) + 'px',
            x: '78px',
            y: '195px',
            select: {
                imgBase: moduleActivePicture['/src/assets/img/module_active/lc.png']['default'],
                imgWdith: Math.round(432*radio) + 'px',
                show: false
            },
            guide: [
                { x: '256px', y: '78px', transform: 'rotateX(60deg) rotate(3deg)' }
            ],
            track: [
                { 
                    imgBase: trackPicture['/src/assets/img/gd/lcgd.png']['default'],
                    imgWdith: Math.round(118*radio) + 'px',
                    x: '246px', 
                    y: '95px'
                }
            ]
        },
        {
            name: '焦化',
            mark: 'jh',
            imgBase: modulePicture['/src/assets/img/module/jh.png']['default'],
            imgWdith: Math.round(309*radio) + 'px',
            x: '369px',
            y: '170px',
            select: {
                imgBase: moduleActivePicture['/src/assets/img/module_active/jh.png']['default'],
                imgWdith: Math.round(345*radio) + 'px',
                show: false
            }
        },
        {
            name: '炼铁',
            mark: 'lt',
            imgBase: modulePicture['/src/assets/img/module/lt.png']['default'],
            imgWdith: Math.round(455*radio) + 'px',
            x: '629px',
            y: '195px',
            guide: [
                { x: '347px', y: '82px', transform: 'rotateX(60deg) rotate(3deg)' }
            ],
            select: {
                imgBase: moduleActivePicture['/src/assets/img/module_active/lt.png']['default'],
                imgWdith: Math.round(485*radio) + 'px',
                show: false
            }
        },
        {
            name: '炼钢',
            mark: 'lg',
            imgBase: modulePicture['/src/assets/img/module/lg.png']['default'],
            imgWdith: Math.round(635*radio) + 'px',
            x: '966px',
            y: '171px',
            select: {
                imgBase: moduleActivePicture['/src/assets/img/module_active/lg.png']['default'],
                imgWdith: Math.round(657*radio) + 'px',
                transform: 'translate(-48.5%, -49.5%)',
                show: false
            },
            guide: [
                { x: '345px', y: '25px', transform: 'rotateX(68deg) rotate(-106deg)' }
            ]
        },
    ],
    // 地区
    area: [
        { 
            title: '西南地区',
            // 相对于背景光圈的位置
            x: '293px',
            y: '834px',
            factory: [
                { province: '四川省', city: '攀枝花', name: '攀钢' },
                { province: '贵州省', city: '贵阳市', name: '首钢贵钢' },
                { province: '贵州省', city: '达州', name: '达钢' },
                { province: '贵州省', city: '六盘水市', name: '首钢水钢' },
                { province: '重庆市', city: '綦江区', name: '旗能电铝' },
                { province: '重庆市', city: '北碚区', name: '重庆武中汽车' }
            ]
        },
        { 
            title: '西北地区',
            x: '394px',
            y: '855px',
            factory: [
                { province: '陕西省', city: '渭南市', name: '龙钢' },
                { province: '甘肃省', city: '嘉峪关市', name: '酒钢' },
                { province: '甘肃省', city: '嘉峪关市', name: '甘肃宏基' }
            ]
        },
        { 
            title: '华中地区',
            x: '512px',
            y: '873px',
            factory: [
                { province: '河南省', city: '安阳市', name: '凤宝特钢' },
                { province: '湖北省', city: '武汉市', name: '武汉钢贸' },
                { province: '湖南省', city: '株洲市', name: '首鹏汇隆' },
                { province: '湖南省', city: '娄底市', name: '华菱汽车板' }
            ]
        },
        { 
            title: '华南地区',
            x: '645px',
            y: '886px',
            factory: [
                { province: '广东省', city: '广州市', name: '广州钢贸' },
                { province: '广东省', city: '佛山市', name: '佛山加工中心' },
                { province: '广西省', city: '柳州市', name: '柳钢' },
                { province: '广西省', city: '防城港', name: '广西钢铁' }
            ]
        },
        { 
            title: '华东地区',
            x: '1055px',
            y: '886px',
            factory: [
                { province: '上海市', city: '上海市', name: '上海钢贸' },
                { province: '江苏省', city: '苏州市', name: '苏州加工中心' },
                { province: '浙江省', city: '宁波市', name: '宁波加工中心' },
                { province: '浙江省', city: '宁波市', name: '台塑' },
                { province: '福建省', city: '漳州市', name: '福欣钢铁' },
                { province: '山东省', city: '青岛市', name: '山东钢贸' }
            ]
        },
        { 
            title: '华北地区',
            x: '1193px',
            y: '873px',
            factory: [
                { province: '北京市', city: '北京市', name: '首钢集团' },
                { province: '北京市', city: '顺义区', name: '顺义冷轧' },
                { province: '北京市', city: '顺义区', name: '首钢鹏龙' },
                { province: '天津市', city: '天津市', name: '天津钢贸' },
                { province: '天津市', city: '天津市', name: '荣程钢铁' },
                { province: '山西省', city: '长治市', name: '首钢长钢' },
                { province: '山西省', city: '侯马市', name: '晋南钢铁' },
                { province: '山西省', city: '太原市', name: '山西煤机' },
                { province: '河北省', city: '石家庄市', name: '澳森钢铁' },
                { province: '河北省', city: '迁安市', name: '首钢迁钢' },
                { province: '河北省', city: '迁安市', name: '首钢智新' },
                { province: '河北省', city: '唐山市', name: '首钢京唐' },
                { province: '河北省', city: '唐山市', name: '西山焦化' },
                { province: '河北省', city: '唐山市', name: '唐银钢铁' },
                { province: '河北省', city: '唐山市', name: '文丰特钢' },
                { province: '河北省', city: '唐山市', name: '唐山中厚板' },
                { province: '河北省', city: '唐山市', name: '华西特钢' },
                { province: '河北省', city: '唐山市', name: '瑞丰钢铁' },
                { province: '河北省', city: '唐山市', name: '纵横钢铁' },
                { province: '河北省', city: '遵化市', name: '港陆钢铁' },
                { province: '河北省', city: '沧州市', name: '中钢滨海' },
                { province: '河北省', city: '秦皇岛市', name: '宏兴钢铁' },
                { province: '河北省', city: '邯郸市', name: '华丰能源' },
                { province: '河北省', city: '邯郸市', name: '太行钢铁' },
                { province: '内蒙古', city: '包头市', name: '包钢' }
            ]
        },
        { 
            title: '东北地区',
            x: '1313px',
            y: '855px',
            factory: [
                { province: '黑龙江省', city: '哈尔滨市', name: '哈尔滨加工中心' },
                { province: '吉林省', city: '通化市', name: '首钢通钢' },
                { province: '辽宁省', city: '沈阳市', name: '沈阳加工中心' },
                { province: '辽宁省', city: '凤城市', name: '首钢硼铁' },
                { province: '辽宁省', city: '本溪市', name: '本钢' }
            ]
        },
        { 
            title: '海外地区',
            x: '1412px',
            y: '834px',
            factory: [
                { province: '印尼', city: '爪哇岛', name: '古龙拉嘉帕斯钢铁' },
                { province: '越南', city: '河静省', name: '河静钢铁' }
            ]
        },
    ],
    // 平台
    platform: [
        {
            name: '智能中台',
            x: 42,
            y: 283,
            pointX: 102,
            pointY: 3,
            size: 22
        },
        {
            name: '数据中台',
            x: 35,
            y: 346,
            pointX: 102,
            pointY: 3,
            size: 22
        },
        {
            name: '边缘层',
            x: 215,
            y: 253,
            pointX: 26,
            pointY: 32,
            size: 22
        },
        {
            name: '安全',
            x: 336,
            y: 256,
            pointX: 13,
            pointY: 32,
            size: 22
        },
        {
            name: '技术中台',
            x: 496,
            y: 369,
            pointX: -34,
            pointY: 4,
            size: 22
        },
        {
            name: '组织架构',
            x: 1081,
            y: 183,
            pointX: -30,
            pointY: 4,
            size: 22,
            content: `
                北京首钢自动化信息技术有限公司在册总人数3900余人，本科以上学历人数占88%。其中：博士12人、硕士144人。公司成立50余人工业互联网平台技术底座研发团队，并通过与产业产品300余人研发团队紧密结合，重点发展集团管控、数智服务、智慧制造、智慧供应链、工厂集控及智能装备六大业务，通过标准统一的工业互联网技术平台赋能产业产品落地，推动场景应用。
                首自信公司以帮助客户实现数字化转型为使命，为客户提升价值为核心理念，以首钢集团信息化平台作为产业发展的基地，以引进、吸收、再创新为手段，经过20余年的积累，形成多款国内优秀的具有自主知识产权的面向钢铁行业的核心技术、产品及解决方案，产品覆盖冶金、政府、能源、汽车、建筑、金融和电力等二十余个行业，团队整体能力在国内同行业名列前茅。<br>
                <b>企业使命：数字驱动  智造未来  惠及社会</b><br>
                <b>企业愿景：工业智能化和智慧城市的引领者</b>     
            `,
            introduceImg: [
                platformJpg['/src/assets/img/platform/zzjg.jpg']['default']
            ],
        },
        {
            name: 'IT基础平台',
            x: 465,
            y: 258,
            size: 24
        },
    ]
}

const dataCenter = {

    namespaced: true,

    state,

    mutations: {},

    actions: {}

}

export default dataCenter
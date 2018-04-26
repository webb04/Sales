import { map } from '../languageSelection';

describe('Translation map', () => {  
    it('should map Chinese content', () => {
        expect(map['cn'].title).toBe('Sale持续进行中');
        expect(map['cn'].mainSubtitle).toBe('幸运之神来敲门');
        expect(map['cn'].subtitle).toBe('近1000商品现正低至4折');
    })

    it('should map GB content', () => {
        expect(map['gb'].title).toBe('Sale');
        expect(map['gb'].mainSubtitle).toBe('Get lucky');
        expect(map['gb'].subtitle).toBe('1000 items at up to 60% off');
    })

    it('should map French content', () => {
        expect(map['fr'].title).toBe('Promotions');
        expect(map['fr'].mainSubtitle).toBe('Ne ratez pas votre chance');
        expect(map['fr'].subtitle).toBe('1000 articles jusqu\'à -60 %');
    })

    it('should map Japanese content', () => {
        expect(map['jp'].title).toBe('セールはまだ開催中');
        expect(map['jp'].mainSubtitle).toBe('リュクスな一点モノをゲット');
        expect(map['jp'].subtitle).toBe('1000ものアイテムが最大60％OFF');
    })

    it('should map German content', () => {
        expect(map['de'].title).toBe('Sale');
        expect(map['de'].mainSubtitle).toBe('Verlieben Sie sich neu!');
        expect(map['de'].subtitle).toBe('1000 Artikel bis 60% reduziert');
    })

    it('should map Korean content', () => {
        expect(map['kr'].title).toBe('SALE');
        expect(map['kr'].mainSubtitle).toBe('행운을 내 두손에!');
        expect(map['kr'].subtitle).toBe('1000가지 이상의 상품 최대 60% 할인');
    })

    it('should map Spanish content', () => {
        expect(map['es'].title).toBe('Rebajas');
        expect(map['es'].mainSubtitle).toBe('Aprovéchate');
        expect(map['es'].subtitle).toBe('1000 artículos hasta con -60%');
    })

    it('should map Mexican content', () => {
        expect(map['mx'].title).toBe('Rebajas');
        expect(map['mx'].mainSubtitle).toBe('Saca partido');
        expect(map['mx'].subtitle).toBe('1000 artículos hasta con -60%');
    })

    it('should map Russian content', () => {
        expect(map['ru'].title).toBe('РАСПРОДАЖА');
        expect(map['ru'].mainSubtitle).toBe('Следите за обновлениями');
        expect(map['ru'].subtitle).toBe('Более 1000 моделей со скидками до 60%');
    })

    it('should map Italian content', () => {
        expect(map['it'].title).toBe('Saldi');
        expect(map['it'].mainSubtitle).toBe('Gioca la fortuna');
        expect(map['it'].subtitle).toBe('1000 prodotti fino al 60%');
    })
})
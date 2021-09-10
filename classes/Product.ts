const discount = (category: string) => {
  // const store = useStore();
  // const discount: ComputedRef<number> = computed(() =>
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  //   store.getters['cart/getDiscount'](category)
  // );
  return discount
}

interface ProductItemImages {
  readonly url: string
  readonly textColor: string
  readonly productId: number
  readonly pos: number
  readonly id: number
  readonly createdAt: number
}

interface ProductItemVariant {
  readonly id: number
  readonly productId: number
  readonly sku: string
  readonly quantity: number
  readonly size: string
  readonly price: number
  readonly category: ProductCategory
}
interface ProductItemCategory {
  readonly active: number
  readonly category: string
  readonly categoryNameId: number
  readonly id: number
  readonly image: string
  readonly name: string
  readonly parentId: number
  readonly pos: number
  readonly updatedAt: string
}

interface ProductItem {
  readonly id: number
  readonly name: string
  readonly price: number
  readonly reference: string
  readonly tags: string
  readonly category: { category: string }
  readonly categoryId: number
  readonly description: string
  readonly createdAt: Date
  readonly updatedAt: Date
  readonly images: ProductImages[]
  readonly variants: ProductVariant[]
}

export type TAPIProductDetailResponse = ProductItem
export type TAPIProductResponse = {
  lenght: number
  products: Product[]
  error?: string
}

export class Product implements ProductItem {
  id: number
  name: string
  reference: string
  tags: string
  categoryId: number
  description: string
  createdAt: Date
  updatedAt: Date
  images: ProductImages[]
  variants: ProductVariant[]
  category: ProductCategory
  //response: TAPIProductResponse

  constructor(
    id: number,
    name: string,
    reference: string,
    tags: string,
    categoryId: number,
    description: string,
    createdAt: Date,
    updatedAt: Date,
    images: ProductImages[],
    variants: ProductVariant[],
    category: ProductCategory
    //response: TAPIProductResponse
  ) {
    this.id = id
    this.name = name
    this.reference = reference
    this.tags = tags
    this.categoryId = categoryId
    this.description = description
    this.createdAt = createdAt
    this.updatedAt = updatedAt
    this.images = images
    this.variants = variants
    this.category = category
    //this.response = response
  }
  price: number = 0
  get image() {
    return this.images.length > 0
      ? `https://v3.tissini.app${this.images[0].url}`
      : 'https://programacion.net/files/article/20161110041116_image-not-found.png'
  }
  // get prices(): string | number {
  //   const priceRange = this.variants.map((variant) => variant.price);
  //   const min = +(
  //     Math.min(...priceRange) -
  //    Math.min(...priceRange) * discount(this.category.category).[value]
  //   ).toFixed(2);
  //   const max = +(
  //     Math.max(...priceRange) -
  //    Math.max(...priceRange) * discount(this.category.category).value
  //   ).toFixed(2);
  //   return min == max ? min : `${min}-${max}`;
  // }
  // get discount(): number {
  //   const subtotal = cartSubtotal();
  //   return getDiscount(subtotal, this.category.category);
  // }
}
class ProductCategory implements ProductItemCategory {
  active: number
  category: string
  categoryNameId: number
  id: number
  image: string
  name: string
  parentId: number
  pos: number
  updatedAt: string
  constructor(productCategory: ProductCategory) {
    this.category = productCategory.category
    this.active = productCategory.active
    this.categoryNameId = productCategory.categoryNameId
    this.id = productCategory.id
    this.image = productCategory.image
    this.name = productCategory.name
    this.parentId = productCategory.parentId
    this.pos = productCategory.pos
    this.updatedAt = productCategory.updatedAt
  }
}
class ProductImages implements ProductItemImages {
  url: string
  textColor: string
  productId: number
  pos: number
  id: number
  createdAt: number

  constructor(productImage: ProductImages) {
    this.url = productImage.url
    this.textColor = productImage.textColor
    this.productId = productImage.productId
    this.pos = productImage.pos
    this.id = productImage.id
    this.createdAt = productImage.createdAt
  }
}

class ProductVariant implements ProductItemVariant {
  id: number
  productId: number
  sku: string
  quantity: number
  size: string
  price: number
  category: ProductCategory

  constructor(productVariant: ProductVariant, category: ProductCategory) {
    this.id = productVariant.id
    this.productId = productVariant.productId
    this.sku = productVariant.sku
    this.quantity = productVariant.quantity
    this.size = productVariant.size
    this.price = productVariant.price
    this.category = category
  }
  // get priceWithDiscount(): number {
  //   const value = +(
  //     this.price -
  //     this.price * discount(this.category.category).value
  //   ).toFixed(2);
  //   return value;
  // }
  // get discount(): number {
  //   const subtotal = cartSubtotal();
  //   return getDiscount(subtotal, this.category.category);
  // }
}

# == Schema Information
#
# Table name: todo_items
#
#  id         :bigint           not null, primary key
#  complete   :boolean          default(FALSE)
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_todo_items_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class TodoItem < ApplicationRecord
  default_scope { order(created_at: :desc) }

  belongs_to :user

  validates :title, presence: true
end

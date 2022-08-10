"""empty message

Revision ID: 9e7bf92d39d6
Revises: 7157dfe14c8b
Create Date: 2022-07-27 16:01:44.742461

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9e7bf92d39d6'
down_revision = '7157dfe14c8b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('cloud_compliance_node',
    sa.Column('created_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('node_id', sa.String(length=200), nullable=False),
    sa.Column('node_name', sa.String(length=200), nullable=False),
    sa.Column('cloud_provider', sa.String(length=200), nullable=False),
    sa.Column('compliance_percentage', sa.Numeric(precision=10, scale=2), nullable=False),
    sa.Column('org_account_id', sa.String(length=200), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('cloud_resource_node',
    sa.Column('created_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('node_id', sa.String(length=200), nullable=False),
    sa.Column('node_type', sa.String(length=200), nullable=False),
    sa.Column('node_name', sa.String(length=200), nullable=False),
    sa.Column('cloud_provider', sa.String(length=200), nullable=False),
    sa.Column('account_id', sa.String(length=200), nullable=False),
    sa.Column('region', sa.String(length=200), nullable=True),
    sa.Column('service_name', sa.String(length=200), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_unique_constraint('node_id_constraint', 'cloud_resource_node',
                                ['node_id', 'node_type', 'region', 'service_name', 'account_id'])
    op.create_table('compliance_rules',
    sa.Column('created_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('compliance_check_type', sa.String(length=200), nullable=False),
    sa.Column('test_category', sa.String(length=200), nullable=True),
    sa.Column('test_number', sa.String(length=200), nullable=False),
    sa.Column('test_desc', sa.Text(), nullable=True),
    sa.Column('test_rationale', sa.Text(), nullable=True),
    sa.Column('cloud_provider', sa.String(length=200), nullable=True),
    sa.Column('is_enabled', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('compliance_check_type', 'test_number', 'cloud_provider', name='compliance_rules_constraint')
    )
    op.create_table('compliance_rules_disabled',
    sa.Column('created_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('node_id', sa.String(length=200), nullable=False),
    sa.Column('disabled_rule_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['disabled_rule_id'], ['compliance_rules.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('compliance_rules_disabled')
    op.drop_table('compliance_rules')
    op.drop_table('cloud_resource_node')
    op.drop_constraint('node_id_constraint', 'cloud_resource_node', type_='unique')
    op.drop_table('cloud_compliance_node')
    # ### end Alembic commands ###